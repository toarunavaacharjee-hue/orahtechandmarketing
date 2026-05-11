import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";
import { buildConfig } from "payload";

import { Resend } from "resend";
import sharp from "sharp";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: false,
    },
  ],
};

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "URL slug, e.g. creative-systems-that-scale" },
    },
    { name: "excerpt", type: "textarea", required: true },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text", required: true }],
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      required: false,
      admin: { description: "Optional. Used for display sorting on the Blog page." },
    },
  ],
};

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["intent", "name", "email", "service", "createdAt"],
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "intent",
      type: "select",
      required: true,
      defaultValue: "project",
      options: [
        { label: "Project", value: "project" },
        { label: "Audit", value: "audit" },
      ],
    },
    { name: "name", type: "text", required: true },
    { name: "company", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text", required: true },
    { name: "service", type: "text", required: true },
    { name: "budget", type: "text", required: true },
    { name: "message", type: "textarea", required: true },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation !== "create") return;

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) return;

        const to = process.env.CONTACT_NOTIFY_EMAIL || "orahhechandmarketing@gmail.com";
        const from = process.env.RESEND_FROM || "Orah Website <onboarding@resend.dev>";

        const resend = new Resend(apiKey);

        const subject =
          doc.intent === "audit"
            ? `New Free Audit request from ${doc.name}`
            : `New contact request from ${doc.name}`;

        const text = [
          `Intent: ${doc.intent}`,
          `Name: ${doc.name}`,
          `Company: ${doc.company}`,
          `Email: ${doc.email}`,
          `Phone: ${doc.phone}`,
          `Service: ${doc.service}`,
          `Budget: ${doc.budget}`,
          "",
          "Message:",
          doc.message,
        ].join("\n");

        await resend.emails.send({
          from,
          to,
          subject,
          text,
        });
      },
    ],
  },
};

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Posts, Contacts],
  admin: {
    user: "users",
  },
  routes: {
    admin: "/orah-control",
  },
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || "file:./payload.db",
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
});

