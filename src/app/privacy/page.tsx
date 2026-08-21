import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 text-sm leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold text-brand-maroon">Privacy Policy</h1>
      <p className="text-xs text-gray-500">Effective Date: August 2026</p>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">1. Data We Collect</h2>
        <p>Ideal Study Hall only collects basic contact details (Student Name, Mobile Number, and Target Exam Stream) solely for membership records and renewal alerts.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">2. Data Usage & Protection</h2>
        <p>Student records are never sold, traded, or shared with third parties. CCTV footage within the study hall is recorded purely for security and safety purposes.</p>
      </section>

      <Link href="/" className="inline-block mt-4 text-xs font-bold text-brand-teal hover:underline">
        ← Back to Homepage
      </Link>
    </div>
  );
}