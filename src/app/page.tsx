import React from 'react';
import Hero from '@/components/Hero';
import Facilities from '@/components/Facilities';
import KnowledgeShelf from '@/components/KnowledgeShelf';
import Pricing from '@/components/Pricing';
import GalleryModal from '@/components/GalleryModal';
import Rules from '@/components/Rules';
import LocationContact from '@/components/LocationContact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Facilities />
      <KnowledgeShelf />
      <Pricing />
      <GalleryModal />
      <Rules />
      <LocationContact />
    </>
  );
}