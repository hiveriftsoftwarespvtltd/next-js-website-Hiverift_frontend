"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Swal from "sweetalert2";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { openEnquiryModal } from "@/app/components/EnquiryModal";
import { submitContactForm } from "@/app/actions/contactActions";
import { siteConfig } from "@/app/config/schema";

const services = [
  "Website Development",
  "eCommerce Development",
  "ERP Development",
  "Mobile App Development",
  "Custom Software",
  "Digital Marketing",
];

const inputClassName = "min-h-12 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/15";

export default function ContactPageContent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    requirement: "",
    budget: "",
    preferredContact: "Email",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("company", formData.company.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("email", formData.email.trim());
      payload.append("service", formData.service);
      payload.append("message", [
        `Project Requirement: ${formData.requirement.trim()}`,
        `Estimated Budget: ${formData.budget.trim() || "Not provided"}`,
        `Preferred Contact Method: ${formData.preferredContact}`,
        `Message: ${formData.message.trim() || "Not provided"}`,
      ].join("\n"));

      const result = await submitContactForm(payload);
      if (!result.success) throw new Error(result.message || "Could not submit your request.");
      router.push("/thank-you");
    } catch (error) {
      Swal.fire({
        title: "Submission Failed",
        text: error instanceof Error ? error.message : "Could not submit your request. Please try again.",
        icon: "error",
        confirmButtonColor: "#059669",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneHref = siteConfig.phone.replace(/[^+\d]/g, "");
  const officeAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="bg-[#f5faf7] pb-14 pt-32 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <section className="flex flex-col justify-center py-4 lg:py-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-800">Contact HiveRift</p>
            <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something That Moves Your Business Forward
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Tell us what you are planning. Our team can help with website and eCommerce development, ERP, mobile apps, custom software, and digital marketing.
            </p>

            <div className="mt-8 grid gap-4 border-y border-slate-200 py-6 text-sm sm:grid-cols-2">
              <a href={`tel:${phoneHref}`} className="flex min-w-0 items-start gap-3 text-slate-800 hover:text-emerald-700">
                <Phone size={18} className="mt-0.5 shrink-0 text-emerald-700" />
                <span><span className="block text-xs text-slate-500">Phone</span><span className="font-bold">88149 30229</span></span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex min-w-0 items-start gap-3 text-slate-800 hover:text-emerald-700">
                <Mail size={18} className="mt-0.5 shrink-0 text-emerald-700" />
                <span><span className="block text-xs text-slate-500">Email</span><span className="break-all font-bold">{siteConfig.email}</span></span>
              </a>
              <div className="flex min-w-0 items-start gap-3 text-slate-800 sm:col-span-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-emerald-700" />
                <span><span className="block text-xs text-slate-500">HiveRift office</span><span className="leading-relaxed">{officeAddress}</span></span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
              <button type="button" onClick={() => openEnquiryModal("Office Visit in Delhi NCR", "meeting")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">
                Visit Our Office in Delhi NCR <ArrowRight size={16} />
              </button>
              <span className="text-xs text-slate-500">Choose a date and time in the form.</span>
            </div>
          </section>

          <section aria-labelledby="proposal-form-title" className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            <div className="mb-6">
              <h2 id="proposal-form-title" className="text-xl font-extrabold text-slate-950 sm:text-2xl">Request a project proposal</h2>
              <p className="mt-2 text-sm text-slate-600">Share your requirements and the best way to reach you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold">Full Name</label><input id="contact-name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className={inputClassName} /></div>
                <div><label htmlFor="contact-company" className="mb-1.5 block text-sm font-semibold">Company Name</label><input id="contact-company" name="company" value={formData.company} onChange={handleChange} autoComplete="organization" className={inputClassName} /></div>
                <div><label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold">Phone Number</label><input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required autoComplete="tel" inputMode="tel" pattern="[+0-9() -]{8,18}" className={inputClassName} /></div>
                <div><label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold">Email</label><input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className={inputClassName} /></div>
                <div><label htmlFor="contact-service" className="mb-1.5 block text-sm font-semibold">Service Required</label><select id="contact-service" name="service" value={formData.service} onChange={handleChange} required className={inputClassName}><option value="">Select a service</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></div>
                <div><label htmlFor="contact-budget" className="mb-1.5 block text-sm font-semibold">Estimated Budget (Optional)</label><input id="contact-budget" type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="Enter your estimated budget" className={inputClassName} /></div>
              </div>

              <div><label htmlFor="contact-requirement" className="mb-1.5 block text-sm font-semibold">Project Requirement</label><textarea id="contact-requirement" name="requirement" value={formData.requirement} onChange={handleChange} required rows={3} className={`${inputClassName} resize-y`} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="contact-preferred" className="mb-1.5 block text-sm font-semibold">Preferred Contact Method</label><select id="contact-preferred" name="preferredContact" value={formData.preferredContact} onChange={handleChange} className={inputClassName}><option>Email</option><option>Phone</option><option>WhatsApp</option></select></div>
                <div><label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold">Message</label><textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={2} className={`${inputClassName} resize-y`} /></div>
              </div>
              <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? "Sending Request..." : "Get Proposal"}{!isSubmitting && <ArrowRight size={17} />}
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}