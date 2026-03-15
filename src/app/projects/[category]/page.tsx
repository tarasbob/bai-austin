import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { projectDetails, getAllCategorySlugs } from '@/lib/projects-data';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = projectDetails[category];
  if (!data) return { title: 'Not Found' };

  return {
    title: data.title,
    description: `Explore BAi's ${data.title.toLowerCase()} projects — acoustics, sound reinforcement, and AV design.`,
  };
}

export default async function ProjectCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = projectDetails[category];

  if (!data) notFound();

  return (
    <>
      <section className="relative bg-[#0f1b2d] pt-32 pb-20 overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b2d]/60 to-[#0f1b2d]/95" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <ScrollReveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/50 text-sm uppercase tracking-wider hover:text-[#c8a555] transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight font-display">
              {data.title}
            </h1>
            <p className="text-white/50 mt-6 max-w-xl text-lg font-light">
              {data.projects.length} project{data.projects.length !== 1 ? 's' : ''} in this category
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            {data.projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
                <article className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-500">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-6">
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-sm bg-[#0f1b2d]/5 text-[#c8a555] font-display text-lg font-semibold shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-[#0f1b2d] mb-1 font-display">
                          {project.name}
                        </h2>
                        <p className="text-[#1a9aaa] text-sm uppercase tracking-wider mb-4">
                          {project.location}
                        </p>
                        <p className="text-[#64748b] leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#c8a555]/20 to-transparent" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f1b2d] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight font-display">
              Start Your <span className="font-semibold">Project</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto">
              With expertise spanning {data.title.toLowerCase()} and beyond, our team is ready to
              bring their acoustics and AV knowledge to your next endeavor.
            </p>
            <a
              href="mailto:info@baiaustin.com"
              className="inline-block bg-[#c8a555] text-[#0f1b2d] px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-[#d4b56a] transition-colors duration-300"
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
