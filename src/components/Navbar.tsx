'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-brand-maroon text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 font-medium text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>Open Daily: 6:00 AM – 10:00 PM</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="hidden sm:inline">Beside Siri Dairy, Jampeta, Rajahmundry</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-brand-gold font-bold">Single Fee: ₹1,100 / Month</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/50 shadow-inner">
              <Image
                src="/images/logo.webp"
                alt="Ideal Study Hall Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-extrabold text-brand-maroon tracking-tight block">
                IDEAL STUDY HALL
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 block">
                Where Effort Meets Success
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-gray-700">
            <Link href="#facilities" className="hover:text-brand-teal transition-colors">
              Facilities
            </Link>
            <Link href="#knowledge-shelf" className="hover:text-brand-teal transition-colors">
              Knowledge Shelf
            </Link>
            <Link href="#pricing" className="hover:text-brand-teal transition-colors">
              Membership (₹1,100)
            </Link>
            <Link href="#gallery" className="hover:text-brand-teal transition-colors">
              Photos
            </Link>
            <Link href="#rules" className="hover:text-brand-teal transition-colors">
              Rules
            </Link>
            <Link href="#contact" className="hover:text-brand-teal transition-colors">
              Location & Contact
            </Link>
          </nav>

          {/* Desktop Action Triggers */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917416411042"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-brand-maroon bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              74164 11042
            </a>
            <a
              href="https://wa.me/917416411042?text=Hello%20Ideal%20Study%20Hall,%20I%20want%20to%20inquire%20about%20joining%20and%20seat%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-maroon focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <Link
            href="#facilities"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-teal border-b border-gray-50"
          >
            Facilities
          </Link>
          <Link
            href="#knowledge-shelf"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-teal border-b border-gray-50"
          >
            Knowledge Shelf
          </Link>
          <Link
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-teal border-b border-gray-50"
          >
            Membership (₹1,100/mo)
          </Link>
          <Link
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-teal border-b border-gray-50"
          >
            Photos
          </Link>
          <Link
            href="#rules"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-teal border-b border-gray-50"
          >
            Rules & Conduct
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-teal"
          >
            Location & Contact
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+917416411042"
              className="w-full flex justify-center items-center gap-2 py-2.5 text-xs font-semibold text-brand-maroon bg-gray-100 rounded-md"
            >
              <Phone className="w-4 h-4" />
              Call: 74164 11042
            </a>
            <a
              href="https://wa.me/917416411042?text=Hello%20Ideal%20Study%20Hall,%20I%20want%20to%20inquire%20about%20joining."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2 py-2.5 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}