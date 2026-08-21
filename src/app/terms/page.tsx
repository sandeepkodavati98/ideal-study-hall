import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 text-sm leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold text-brand-maroon">Terms of Admission & Code of Conduct</h1>
      <p className="text-xs text-gray-500">Effective Date: August 2026</p>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">1. Membership & Validity</h2>
        <p>Membership is valid for exactly 30 consecutive calendar days from the date of admission/payment (₹1,100 per month). Membership is personal and non-transferable to other individuals.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">2. Study Hours & Access</h2>
        <p>Members have access to their allotted cabin during operational hours (6:00 AM to 10:00 PM daily). Ideal Study Hall reserves the right to announce scheduled maintenance or festival holiday hours in advance.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">3. Hall Discipline</h2>
        <p>Absolute silence must be observed inside the study hall. Phone calls, discussions, and nuisance behavior will lead to cancellation of membership without refund.</p>
      </section>

      <Link href="/" className="inline-block mt-4 text-xs font-bold text-brand-teal hover:underline">
        ← Back to Homepage
      </Link>
    </div>
  );
}