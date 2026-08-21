import React from 'react';
import Image from 'next/image';
import { 
  Zap, 
  Wind, 
  Wifi, 
  Video, 
  Droplet, 
  SunMedium, 
  BookOpenCheck, 
  Newspaper, 
  Armchair,
  Users2
} from 'lucide-react';

const facilitiesList = [
  {
    icon: Armchair,
    title: 'Individual Cabins',
    description: 'Private cubicle with upper storage rack, reading mat, and comfortable padded armchair.',
  },
  {
    icon: Wind,
    title: 'Fully Air-Conditioned',
    description: 'Even cooling throughout the study hall to maintain optimal concentration in all seasons.',
  },
  {
    icon: Zap,
    title: 'Individual Charging & Power Backup',
    description: 'Dedicated switchboard at every single cabin with battery inverter backup support.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Reliable internet connection for online lectures, test series, and reference material.',
  },
  {
    icon: SunMedium,
    title: 'Uniform Eye-Friendly Lighting',
    description: 'Recessed and tube LED lighting designed to reduce eye fatigue during long study sessions.',
  },
  {
    icon: Video,
    title: '24/7 CCTV Surveillance',
    description: 'Continuous monitoring across the study space for student safety and item security.',
  },
  {
    icon: Droplet,
    title: 'Clean Drinking Water',
    description: 'Hygienic drinking water setup accessible inside the facility at all times.',
  },
  {
    icon: Newspaper,
    title: 'Daily Newspapers & Current Affairs',
    description: 'Fresh newspapers and monthly magazines available for daily preparation.',
  },
  {
    icon: Users2,
    title: 'Separate Basic Washrooms',
    description: 'Separate, clean, and basic washroom facilities for men and women.',
  },
  {
    icon: BookOpenCheck,
    title: 'Knowledge Shelf',
    description: 'Free reference books for CA, UPSC, State Groups, SSC, Banking, and Police exams.',
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-16 bg-gradient-to-b from-[#FAFAFB] to-white border-b border-gray-200/70 overflow-hidden">
      {/* Subtle Background Pattern & Ambient Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 ambient-glow-teal rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-teal">Verified Amenities</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            Everything You Need for Distraction-Free Preparation
          </p>
          <p className="text-sm text-gray-600 mt-2">
            No exaggerated claims — every facility listed here is physically installed and maintained at Ideal Study Hall.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-sm hover:border-brand-teal hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-tealLight flex items-center justify-center text-brand-teal mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Real Cabin Highlight Banner */}
        <div className="relative mt-14 p-6 sm:p-8 rounded-2xl bg-brand-maroon text-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl shadow-brand-maroon/15 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
          
          <div className="relative md:col-span-8 space-y-2.5">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Ergonomic Cubicles</span>
            <h3 className="text-xl sm:text-2xl font-bold">Standard Individual Cabin Features</h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-xl">
              Every desk includes an individual 3-pin socket, light switch, overhead book rest, and a wide desktop mat so you can set up your laptop, notes, and water bottle comfortably.
            </p>
          </div>
          
          <div className="relative md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-xl overflow-hidden border-2 border-brand-gold/50 shadow-2xl">
              <Image
                src="/images/cabin-single.webp"
                alt="Individual study desk #9 at Ideal Study Hall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}