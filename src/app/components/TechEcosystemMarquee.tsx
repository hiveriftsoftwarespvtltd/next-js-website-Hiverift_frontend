"use client";

import { motion } from "motion/react";

const technologies = [
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
  { name: "Node.js", logo: "https://nodejs.org/static/images/logo-hexagon.svg" },
  { name: "PHP", logo: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
  { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "Flutter", logo: "https://storage.googleapis.com/cms-storage-bucket/4fd0db66116b0fcdf385.png" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "WordPress", logo: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" },
  { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google Cloud", logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" },
  { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
];

export function TechEcosystemMarquee() {
  const doubledTech = [...technologies, ...technologies];

  return (
    <section className="py-14 bg-[#f8fdfa] border-t border-emerald-100 overflow-hidden relative select-none">
      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/80 border border-emerald-300 rounded-full mb-3">
          <span className="text-[10px] font-mono font-bold text-[#059669] uppercase tracking-widest">
            Frameworks & Infrastructure
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Technology We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#0d9488]">Work With</span>
        </h2>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: [0, -100 * (technologies.length * 1.5)] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubledTech.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white rounded-2xl border-2 border-emerald-200/80 hover:border-emerald-500 transition-all duration-300 shadow-sm"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-6 h-6 object-contain"
                loading="lazy"
              />
              <span className="text-sm font-bold text-slate-800 tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8fdfa] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8fdfa] to-transparent" />
      </div>
    </section>
  );
}
