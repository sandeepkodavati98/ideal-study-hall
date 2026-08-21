import React from 'react';
import Link from 'next/link';

export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 text-sm leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold text-brand-maroon">Fee & Cancellation Policy</h1>
      <p className="text-xs text-gray-500">Effective Date: August 2026</p>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">1. Zero Security Deposit</h2>
        <p>Ideal Study Hall charges <strong>₹0 security deposit</strong>. Students pay only the standard monthly membership fee of ₹1,100.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">2. Monthly Fee Non-Refundability</h2>
        <p>Once a monthly seat reservation (₹1,100) is paid and the 30-day period begins, the monthly fee is non-refundable. Students may choose not to renew for subsequent months without any cancellation penalty.</p>
      </section>

      <Link href="/" className="inline-block mt-4 text-xs font-bold text-brand-teal hover:underline">
        ← Back to Homepage
      </Link>
    </div>
  );
}