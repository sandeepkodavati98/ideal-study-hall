import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Instagram } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-teal">Location & Inquiries</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            Visit Ideal Study Hall
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Centrally located near Jampeta, easily accessible for all students in Rajahmundry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-maroon flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Physical Address</h3>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Near Nandam Ganiraju Junction, Beside Siri Dairy, Jampeta, <br />
                    <strong>Rajahmundry - 533 101</strong>, Andhra Pradesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Daily Study Hours</h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    <strong>6:00 AM – 11:30 PM</strong> (Open 7 Days a Week)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Direct Calling & WhatsApp</h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    <strong>+91 74164 11042</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-pink-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Official Instagram</h3>
                  <a
                    href="https://instagram.com/ideal_study_hall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-teal hover:underline mt-0.5 block"
                  >
                    @ideal_study_hall
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Triggers */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/917416411042?text=Hello%20Ideal%20Study%20Hall,%20I%20am%20coming%20to%20visit%20the%20hall."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Beside+Siri+Dairy+Jampeta+Rajahmundry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 py-3 rounded-lg bg-gray-900 hover:bg-black text-white text-xs font-bold shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

          </div>

          {/* Building Recognition Image & Landmark Note */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[16/10] bg-gray-100">
              <Image
                src="/images/exterior.webp"
                alt="Ideal Study Hall building exterior and signboard near Siri Dairy Jampeta"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white p-3 text-xs">
                <strong>Landmark:</strong> Building is situated right beside Siri Dairy with clear signboard visibility.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}