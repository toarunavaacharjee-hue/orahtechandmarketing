type Client = {
  name: string;
  industry: string;
  accent: string;
  icon: React.ReactNode;
};

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="18" height="12" rx="1"/><path d="M8 9V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4"/><line x1="12" y1="12" x2="12" y2="12.01"/>
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}
function HotelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20h20M4 20V8l8-6 8 6v12"/><rect x="9" y="12" width="6" height="8"/>
    </svg>
  );
}
function HandsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  );
}

import React from "react";

const clients: Client[] = [
  { name: "Luminary Skin", industry: "D2C", accent: "#FF5C1A", icon: <BagIcon /> },
  { name: "Stackflow", industry: "SaaS", accent: "#00D4FF", icon: <CodeIcon /> },
  { name: "Verdant Health", industry: "Healthcare", accent: "#b8ff6c", icon: <HeartIcon /> },
  { name: "Pinnacle RE", industry: "Real Estate", accent: "#7c6cff", icon: <BuildingIcon /> },
  { name: "Kova Commerce", industry: "E-commerce", accent: "#FF5C1A", icon: <CartIcon /> },
  { name: "Brightleaf Edu", industry: "Education", accent: "#00D4FF", icon: <BookIcon /> },
  { name: "Crestline Hotels", industry: "Hospitality", accent: "#b8ff6c", icon: <HotelIcon /> },
  { name: "Reach NGO", industry: "Non-profit", accent: "#7c6cff", icon: <HandsIcon /> },
];

export function TrustedBy() {
  return (
    <section className="border-y border-white/5 bg-black/20 py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
          Trusted by 200+ brands across 8+ industries
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-5 text-center transition hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-xl transition group-hover:scale-105"
                style={{ background: `${c.accent}18`, color: c.accent, boxShadow: `0 0 0 1px ${c.accent}30` }}
              >
                {c.icon}
              </div>
              <div>
                <div className="font-heading text-xs font-semibold leading-tight text-white/80">{c.name}</div>
                <div className="mt-0.5 text-[10px] text-white/35">{c.industry}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
