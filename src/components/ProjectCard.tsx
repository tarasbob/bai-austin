'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProjectCategory } from '@/lib/constants';

interface ProjectCardProps {
  category: ProjectCategory;
  index: number;
}

export default function ProjectCard({ category, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${category.id}`}
        className="group relative aspect-[4/3] rounded-sm overflow-hidden block"
      >
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-[#0f1b2d]/20 group-hover:bg-[#0f1b2d]/50 transition-all duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
            <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-lg font-display">
              {category.title}
            </h3>
            <div className="flex items-center gap-2 text-[#c8a555] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="uppercase tracking-wider text-xs">Explore Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c8a555] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.div>
  );
}
