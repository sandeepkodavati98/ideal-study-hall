import React from 'react';
import { VolumeX, UserCheck, CalendarClock, ShieldAlert, BookOpenCheck, CreditCard } from 'lucide-react';

const verifiedRules = [
  {
    icon: VolumeX,
    title: 'Absolute Silence Policy',
    desc: 'Group discussions, loud conversations, and phone calls are strictly prohibited inside the hall.',
  },
  {
    icon: UserCheck,
    title: 'Allotted Cabin Discipline',
    desc: 'Occupy only your assigned numbered cabin. Shifting to another desk without prior permission is not allowed.',
  },
  {
    icon: CalendarClock,
    title: '3 Days Vacating Notice',
    desc: 'Please inform the management at least 3 days in advance before vacating your cabin.',
  },
  {
    icon: CreditCard,
    title: 'On-Time Monthly Payments',
    desc: 'Renew your single ₹1,100 monthly membership on or before your due date to maintain uninterrupted desk reservation.',
  },
  {
    icon: BookOpenCheck,
    title: 'Knowledge Shelf Etiquette',
    desc: 'Return all newspapers, magazines, and exam reference books to their designated shelves immediately after use.',
  },
  {
    icon: ShieldAlert,
    title: 'Personal Valuables & Gadgets',
    desc: 'Keep laptops, chargers, and personal items safe. Management is not responsible for any loss or damage.',
  },
];

export default function Rules() {
  return (
    <section id="rules" className="relative py-16 bg-white border-b border-gray-200/70 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-teal">Code of Conduct</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">Study Hall Instructions & Rules</p>
          <p className="text-xs text-gray-500 mt-1.5">
            Strictly followed by all members to ensure an uninterrupted, respectful study environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl border border-gray-200/80 bg-gray-50/70 hover:bg-white hover:border-brand-maroon/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-maroon text-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">{rule.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{rule.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}