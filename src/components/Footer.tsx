import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-maroonDark text-white text-xs border-t border-brand-maroon overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-brand-gold/40">
                <Image
                  src="/images/logo.webp"
                  alt="Ideal Study Hall"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-sm tracking-wide text-brand-gold">
                IDEAL STUDY HALL
              </span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
              A serious, quiet, and fully air-conditioned study hall in Rajahmundry. Dedicated individual cabins, power backup, and Knowledge Shelf books.
            </p>
            <p className="text-[11px] text-brand-gold font-semibold">
              Open Daily: 6:00 AM – 11:30 PM
            </p>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-3 uppercase tracking-wider text-[11px]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#facilities" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link href="#knowledge-shelf" className="hover:text-white transition-colors">Knowledge Shelf</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">₹1,100 Membership</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Real Photos</Link></li>
              <li><Link href="#rules" className="hover:text-white transition-colors">Hall Rules</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-3 uppercase tracking-wider text-[11px]">
              Transparency & Legal
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Admission</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Fee & Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Credits */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-400 text-[11px]">
          <p>© {new Date().getFullYear()} Ideal Study Hall, Rajahmundry. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-gray-300">
            <span>Designed & Developed by</span>
            <span className="font-semibold text-brand-gold">Sandeep Kodavati</span>
          </div>
        </div>
      </div>
    </footer>
  );
}