'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { heroSlides } from '@/lib/constants';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 animate-kenburns">
            <Image
              src={heroSlides[current].image}
              alt={heroSlides[current].title}
              fill
              className="object-cover"
              priority={current === 0}
              sizes="100vw"
            />
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${heroSlides[current].gradient} opacity-40`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d]/90 via-[#0f1b2d]/30 to-[#0f1b2d]/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c8a555]" />
            <span className="text-[#c8a555] text-xs uppercase tracking-[0.3em] font-medium">
              Since 1935
            </span>
            <span className="h-px w-12 bg-[#c8a555]" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 font-display">
            <span className="font-bold">BAi</span>
            <span className="text-white/40 mx-3 font-extralight">|</span>
            <span className="text-white/80 font-light italic">Acoustics</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-4">
            Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems
          </p>

          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-[#c8a555]/80 uppercase tracking-widest mt-2"
            >
              {heroSlides[current].title}
            </motion.p>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/services"
              className="inline-block bg-[#c8a555] text-[#0f1b2d] px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#d4b56a] transition-all duration-300 glow-gold"
            >
              Explore Our Services
            </a>
            <a
              href="/projects"
              className="inline-block border border-white/20 text-white/80 px-8 py-3 text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white/80 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white/80 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={40} strokeWidth={1} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-[#c8a555]' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
    </section>
  );
}
