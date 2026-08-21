import React from 'react';
import { VolumeX, PhoneOff, Trash2, ShieldAlert } from 'lucide-react';

const rules = [
  {
    icon: VolumeX,
    title: 'Strict Silence Inside the Hall',
    desc: 'Maintain absolute silence at all times. Group discussions and whispered conversations are prohibited inside the study cabin area.',
  },
  {
    icon: PhoneOff,
    title: 'Mobile Phones on Silent Mode',
    desc: 'Keep mobile phones on silent or vibration-off mode. Attending voice calls inside the reading hall is strictly not allowed.',
  },
  {
    icon: Trash2,
    title: 'Desk Cleanliness & Discipline',
    desc: 'Keep your allocated cabin clean. Do not leave tea cups or trash on the tables. Place items in the designated dustbins.',
  },
  {
    icon: ShieldAlert,
    title: 'Respect Shared Study Materials',
    desc: 'Knowledge Shelf books and newspapers are for the benefit of all students. Please do not mark, tear, or take shared books outside.',
  },
];

export default function Rules() {
  return (
    <section id="rules" className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-teal">Code of Conduct</h2>
          <p className="text-2xl font-extrabold text-gray-900 mt-1">Study Hall Rules</p>
          <p className="text-xs text-gray-500 mt-1">
            Rules strictly enforced to guarantee an uninterrupted study environment for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rules.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <div className="w-8 h-8 rounded-md bg-brand-maroon text-white flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}