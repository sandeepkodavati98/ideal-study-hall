import React from 'react';
import Image from 'next/image';
import { BookOpen, CheckCircle, GraduationCap } from 'lucide-react';

const targetedExams = [
  'Chartered Accountancy (CA)',
  'UPSC Civil Services',
  'APPSC / State Public Service Groups',
  'Staff Selection Commission (SSC CGL / CHSL)',
  'Banking (IBPS, SBI PO / Clerk)',
  'Railway Recruitment Board (RRB)',
  'Police & SI Examinations',
  'Monthly Current Affairs Compilations'
];

export default function KnowledgeShelf() {
  return (
    <section id="knowledge-shelf" className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-goldLight text-brand-maroon text-xs font-bold border border-brand-gold/30">
              <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
              In-House Study Resource
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              The Knowledge Shelf: Free Competitive Exam Books
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              We provide an in-house collection of standard preparation materials, magazines, and reference books for government and competitive examinations. All enrolled members can freely read and reference these books inside the study hall.
            </p>

            <div className="p-4 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-teal" />
                Supported Exam Streams & Study Material
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {targetedExams.map((exam, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                    <span>{exam}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gray-500 italic">
              * Note: Knowledge Shelf books are intended for in-hall study and reference during your study sessions.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white aspect-[16/10]">
              <Image
                src="/images/guidance-banner.webp"
                alt="Guidance and exam preparation note from experienced faculty at Ideal Study Hall"
                fill
                className="object-contain bg-brand-maroon"
              />
            </div>
            <div className="p-3.5 bg-brand-tealLight rounded-lg border border-brand-teal/20 text-brand-teal text-xs font-medium">
              💡 <strong>Faculty Guidance:</strong> Study under the environment and guidance of successful SSC, Banking, Railway employees and experienced aspirants.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}