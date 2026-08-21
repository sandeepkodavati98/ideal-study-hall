'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

const galleryImages: GalleryItem[] = [
  {
    src: '/images/hall-wide.webp',
    title: 'Full Hall View - Cabins 1 to 59+',
    category: 'Study Room'
  },
  {
    src: '/images/hall-aisle.webp',
    title: 'Central Aisle & Uniform Illumination',
    category: 'Interior'
  },
  {
    src: '/images/cabin-single.webp',
    title: 'Individual Cabin with Power Plug & Shelf',
    category: 'Desk View'
  },
  {
    src: '/images/exterior.webp',
    title: 'Exterior & Street Entrance beside Siri Dairy',
    category: 'Exterior'
  },
  {
    src: '/images/facilities-board.webp',
    title: 'Verified Facilities Notice Board',
    category: 'Official Board'
  },
  {
    src: '/images/guidance-banner.webp',
    title: 'Exam Preparation & Mentorship Banner',
    category: 'Information'
  }
];

export default function GalleryModal() {
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-teal">Authentic Space Tour</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            Real Photos of Ideal Study Hall
          </p>
          <p className="text-xs text-gray-500 mt-1">
            No stock imagery. This is exactly what you see when you visit us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer aspect-[4/3]"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <span className="self-end bg-black/60 p-1.5 rounded-full">
                  <Maximize2 className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold block">
                    {img.category}
                  </span>
                  <p className="text-xs font-semibold">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-4xl w-full max-h-[85vh] h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-sm font-medium mt-3 text-center">
                {selectedImg.title}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}