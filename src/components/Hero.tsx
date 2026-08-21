import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MessageCircle, MapPin, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F6F8F8] to-[#F0F5F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-gray-200/70">
      
      {/* Decorative Grid and Ambient Glow Backdrops */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 ambient-glow-maroon rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] ambient-glow-teal rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-brand-gold/50 shadow-sm text-brand-maroon text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>Rajahmundry’s Dedicated Govt Exam Study Space</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              A Quiet, Distraction-Free Place to <span className="text-brand-maroon underline decoration-brand-gold/60 underline-offset-8">Focus & Succeed</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Built for <strong>CA, UPSC, APPSC Groups, SSC, Banking, Railways, and Police</strong> aspirants. Study in peaceful, fully air-conditioned individual cabins equipped with uninterrupted power backup and study resources.
            </p>

            {/* Structured Fee Card */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-brand-teal/30 shadow-lg shadow-brand-teal/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-1">
                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest block">Single Flat Fee</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-brand-maroon tracking-tight">₹1,100</span>
                  <span className="text-sm font-semibold text-gray-600">/ 30 Days</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-teal pt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
                  <span>Zero Security Deposit • Zero Admission Fee</span>
                </div>
              </div>

              <div className="w-full sm:w-auto">
                <a
                  href="https://wa.me/917416411042?text=Hello%20Ideal%20Study%20Hall,%20I%20want%20to%20reserve%20my%20seat%20for%20this%20month."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-maroon hover:bg-brand-maroonDark active:scale-95 shadow-md shadow-brand-maroon/20 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join via WhatsApp
                </a>
              </div>
            </div>

            {/* Verified Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-700 font-semibold pt-1">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Numbered Cabins</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Full Air Conditioning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Power Backup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Dedicated Plug Socket</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>High-Speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                <BookOpen className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Knowledge Shelf</span>
              </div>
            </div>

            {/* Verified Location & Timings Footer */}
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <MapPin className="w-4 h-4 text-brand-maroon flex-shrink-0" />
              <span>Beside Siri Dairy, Jampeta, Rajahmundry • <strong>6:00 AM to 10:00 PM</strong> Daily</span>
            </div>

          </div>

          {/* Right Column - Authentic Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-square group">
              <Image
                src="/images/hall-wide.webp"
                alt="Actual view of Ideal Study Hall showing individual cabins, clean aisle, and uniform lighting"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-brand-gold w-fit mb-1">
                  Verified Physical Premises
                </div>
                <p className="text-sm font-bold">Ideal Study Hall — Main Reading Room</p>
                <p className="text-xs text-gray-300">Clean, uniform LED lighting with private study cubicles (#1 to #59+)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}