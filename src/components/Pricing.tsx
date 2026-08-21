import React from 'react';
import { Check, MessageCircle, AlertCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-teal">Transparent Pricing</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            One Simple Monthly Membership
          </p>
          <p className="text-xs text-gray-500 mt-1">
            No complex tiers, no hidden maintenance fees, no security deposit.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-2xl border-2 border-brand-maroon/80 bg-white p-7 shadow-lg relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-brand-maroon text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Standard Plan
            </div>

            <div className="mb-6">
              <span className="text-xs text-gray-500 font-bold uppercase">Monthly Access</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-extrabold text-brand-maroon">₹1,100</span>
                <span className="text-sm font-semibold text-gray-600">/ 30 Days</span>
              </div>
              <p className="text-xs text-green-700 font-medium mt-1">
                Zero security deposit required
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Dedicated individual numbered cabin</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Full access from <strong>6:00 AM to 11:30 PM</strong> daily</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Air conditioned study environment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Individual power plug & backup inverter</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>High-speed Wi-Fi & Knowledge Shelf books</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Drinking water & separate basic washrooms</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/917416411042?text=Hello%20Ideal%20Study%20Hall,%20I%20want%20to%20join%20at%20₹1,100/month.%20Please%20let%20me%20know%20the%20admission%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-maroon hover:bg-brand-maroonDark text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Join at ₹1,100 / Month
              </a>
            </div>

            <div className="mt-4 p-2.5 bg-gray-50 rounded-lg flex items-start gap-2 text-[11px] text-gray-500">
              <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <span>Payments can be settled in person or via direct UPI at the hall.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}