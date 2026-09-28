"use client";

import { motion } from "motion/react";
import { 
  Code, 
  Smartphone, 
  Brain, 
  TrendingUp, 
  Cloud, 
  Shield, 
  Palette, 
  Search, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const solutions = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for scalability and performance.",
    features: ["React & Next.js", "Progressive Web Apps", "E-Commerce Platforms"],
    image: "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzA4NTA2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter"],
    image: "https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcwODY3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent systems powered by artificial intelligence and machine learning algorithms.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDg1NjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that drive growth and maximize ROI.",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzA4OTg5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for modern business needs.",
    features: ["AWS & Azure", "Cloud Migration", "DevOps"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description: "Optimize your online presence and track performance with advanced analytics.",
    features: ["Technical SEO", "Google Analytics", "Conversion Optimization"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform data into actionable insights with powerful analytics tools.",
    features: ["Data Visualization", "Reporting Dashboards", "Predictive Models"],
  },
];

export function ComprehensiveDigitalSolutions() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-emerald-50/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full mb-4">
            <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">
              Our Expertise
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Digital Solutions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end technology services designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        {/* Featured Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.slice(0, 4).map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-emerald-300">
                {/* Image */}
                {solution.image && (
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                        <solution.icon size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Solutions */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.slice(4).map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
                  <solution.icon size={24} className="text-emerald-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Explore All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
