import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { offices, socialLinks, navLinks } from '@/lib/constants';

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0f1b2d] text-white grain overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a555]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Image
              src="/images/logo.gif"
              alt="BAi Acoustics"
              width={140}
              height={46}
              className="h-10 w-auto mb-5"
            />
            <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-6">
              Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems. Serving
              Texas and beyond since 1935.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="flex items-center justify-center w-10 h-10 rounded-sm bg-white/5 text-white/50 hover:bg-[#c8a555]/10 hover:text-[#c8a555] transition-all duration-300"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[#c8a555] font-semibold text-xs uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-[#c8a555] font-semibold text-xs uppercase tracking-wider mb-5">
              Our Offices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.city}>
                  <h4 className="text-white font-medium text-sm mb-3">
                    {office.city}{office.isHQ && ' (HQ)'}
                  </h4>
                  <ul className="space-y-2.5 text-sm text-white/50">
                    <li className="flex items-start gap-2">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-[#1a9aaa]" />
                      <span className="leading-snug">{office.address}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone size={14} className="shrink-0 text-[#1a9aaa]" />
                      <a
                        href={`tel:${office.phone.replace(/\./g, '')}`}
                        className="hover:text-white transition-colors"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail size={14} className="shrink-0 text-[#1a9aaa]" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-white transition-colors"
                      >
                        {office.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy;{new Date().getFullYear()} BAi, LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Austin &middot; Dallas &middot; Houston
          </p>
        </div>
      </div>
    </footer>
  );
}
