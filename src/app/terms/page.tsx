import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and conditions for Orah Tech and Marketing.",
};

export default function TermsPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <h1 className="font-heading text-4xl tracking-tight text-white">Terms</h1>
        <p className="mt-4 text-white/70 leading-7">
          This is a placeholder terms page. Before going live, replace this content with
          your final terms and conditions.
        </p>
        <div className="mt-10 grid gap-6 text-sm leading-6 text-white/70">
          <section>
            <div className="font-semibold text-white">Use of website</div>
            <p className="mt-2">
              Content is provided for informational purposes. You agree not to misuse the
              website or attempt unauthorized access.
            </p>
          </section>
          <section>
            <div className="font-semibold text-white">Liability</div>
            <p className="mt-2">
              We strive for accuracy but make no guarantees. Use at your own risk.
            </p>
          </section>
          <section>
            <div className="font-semibold text-white">Contact</div>
            <p className="mt-2">Email: orahtechandmarketing@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}

