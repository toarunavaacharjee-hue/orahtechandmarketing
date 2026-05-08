import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Orah Tech and Marketing.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <h1 className="font-heading text-4xl tracking-tight text-white">Privacy Policy</h1>
        <p className="mt-4 text-white/70 leading-7">
          This is a placeholder privacy policy. Before going live, replace this page with
          your final policy including how you collect, use, and store user data.
        </p>
        <div className="mt-10 grid gap-6 text-sm leading-6 text-white/70">
          <section>
            <div className="font-semibold text-white">Information we collect</div>
            <p className="mt-2">
              Information you submit via forms (name, email, phone, company) and basic
              analytics data used to improve the website.
            </p>
          </section>
          <section>
            <div className="font-semibold text-white">How we use information</div>
            <p className="mt-2">
              To respond to enquiries, provide services, and improve our marketing and user
              experience.
            </p>
          </section>
          <section>
            <div className="font-semibold text-white">Contact</div>
            <p className="mt-2">Email: hello@orahtechandmarketing.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}

