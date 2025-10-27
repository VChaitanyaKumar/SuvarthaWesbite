"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function SuvarthaTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Soby Eldho",
      text: "God has done wonders for me, I want to thank Lord Jesus Christ and thank you to all the people in church for their prayers and support. My life has been completely renewed.",
      role: "Community Member",
      image: "/assets/img/Soby Eldho.jpg"
    },
    {
      name: "Sandhya Ratheesh", 
      text: "I was COVID +ve, given birth to a baby with sound health and no COVID-19, though the baby was predicted to be +ve and to suffer long time skin disease. All the glory to Lord Jesus Christ.",
      role: "Community Member",
      image: "/assets/img/Sandhya Ratheesh.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Testimonials</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our community members about their experiences and faith journey with us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-3xl">${testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</div>`;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <div className="w-20 h-1 bg-gray-800 mx-auto md:mx-0 mb-6"></div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <p className="text-emerald-600 font-semibold text-lg">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                disabled={testimonials.length <= 1}
              >
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                disabled={testimonials.length <= 1}
              >
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}