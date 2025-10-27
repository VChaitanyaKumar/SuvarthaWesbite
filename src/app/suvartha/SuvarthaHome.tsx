"use client";

import SuvarthaHeader from '@/components/suvartha/SuvarthaHeader';
import SuvarthaHero from '@/components/suvartha/SuvarthaHero';
import SuvarthaServices from '@/components/suvartha/SuvarthaServices';
import SuvarthaTestimonials from '@/components/suvartha/SuvarthaTestimonials';
import SuvarthaContact from '@/components/suvartha/SuvarthaContact';
import SuvarthaFooter from '@/components/suvartha/SuvarthaFooter';

export default function SuvarthaHome() {
  return (
    <div className="min-h-screen">
      <SuvarthaHeader />
      <SuvarthaHero />
      <SuvarthaServices />
      <SuvarthaTestimonials />
      <SuvarthaContact />
      <SuvarthaFooter />
    </div>
  );
}