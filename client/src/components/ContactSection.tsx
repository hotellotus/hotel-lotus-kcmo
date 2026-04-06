/*
 * Hotel Lotus KCMO — Contact Section
 * Design: Dark background, contact form, hotel info
 * Colors: Hotel black background, gold accents, white text
 */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const contactMutation = trpc.contact.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      await contactMutation.mutateAsync(form);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(816) 921-6000",
      href: "tel:8169216000",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "Hotellotusstadium@gmail.com",
      href: "mailto:Hotellotusstadium@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "3830 Blue Ridge Cutoff, Kansas City, MO 64133",
      href: "https://maps.google.com/?q=3830+Blue+Ridge+Cutoff+Kansas+City+MO+64133",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Check-in / Check-out",
      value: "Check-in: 4:00 PM · Check-out: 11:00 AM",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[oklch(0.08_0_0)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
          >
            Get In Touch
          </p>
          <h2
            className="text-white text-4xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h2>
          <div className="w-12 h-px bg-[oklch(0.73_0.12_85)] mx-auto mb-6" />
          <p
            className="text-white/60 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Our team is happy to answer your questions. Fill out the form and we'll be in touch as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3
              className="text-white text-2xl font-semibold mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hotel Information
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.73_0.12_85)]/40 text-[oklch(0.73_0.12_85)] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-1"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/80 text-sm hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)]"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="text-white/80 text-sm"
                        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <p
                className="text-[oklch(0.73_0.12_85)] text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Follow Us On
              </p>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    onClick={(e) => { e.preventDefault(); toast.info(`${social} page coming soon`); }}
                    className="px-4 py-2 border border-[oklch(0.73_0.12_85)]/40 text-white/60 hover:border-[oklch(0.73_0.12_85)] hover:text-[oklch(0.73_0.12_85)] transition-all text-xs tracking-widest uppercase focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/60 text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tell us your name"
                  className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)] transition-colors placeholder:text-white/30"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/60 text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)] transition-colors placeholder:text-white/30"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/60 text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Enter your contact number"
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)] transition-colors placeholder:text-white/30"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-white/60 text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)] transition-colors placeholder:text-white/30 resize-none"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  required
                  aria-required="true"
                />
              </div>
              
              <button
                type="submit"
                disabled={sending || contactMutation.isPending}
                className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-60 focus:outline-2 focus:outline-offset-2 focus:outline-[oklch(0.73_0.12_85)]"
                style={{
                  backgroundColor: "oklch(0.73 0.12 85)",
                  color: "oklch(0.08 0 0)",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  padding: "0.875rem 2.5rem",
                  border: "none",
                }}
                aria-label="Send contact form"
              >
                <Send className="w-4 h-4" />
                {sending || contactMutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
