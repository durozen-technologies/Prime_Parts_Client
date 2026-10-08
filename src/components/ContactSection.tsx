'use client';

import React, { useState } from 'react';
import { COMPANY_DATA } from '@/data/companyData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';

interface ContactSectionProps {
  initialRequirement?: string;
}

export default function ContactSection({ initialRequirement = '' }: ContactSectionProps) {
  const { contactInfo } = COMPANY_DATA;
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: initialRequirement || 'Engine Components',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Prime Parts team, I am interested in sourcing spare parts: ${formData.requirement || 'General Enquiry'}`
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2.5 sm:mb-3">
            <Mail className="w-3.5 h-3.5 text-red-700" />
            <span>DIRECT B2B & RETAIL ENQUIRY</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight mb-2.5 sm:mb-3">
            Connect With Prime Parts
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Send your RFQ, part number requirements, or dealership inquiry directly to our technical sales team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Info & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-5 sm:p-8 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-card-soft">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display uppercase tracking-wider mb-4 sm:mb-6">
                Corporate Office & Hub
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-6">
                {/* Phone */}
                <div className="flex items-start gap-2.5 sm:gap-4 min-w-0">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 shrink-0">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-600 truncate">Phone & Orders</div>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-xs sm:text-base font-bold text-slate-900 hover:text-red-700 transition-colors block truncate"
                    >
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`tel:${contactInfo.phoneSecondary}`}
                      className="text-xs text-slate-600 hover:text-red-700 transition-colors block mt-0.5 truncate hidden sm:block"
                    >
                      {contactInfo.phoneSecondary}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5 sm:gap-4 min-w-0">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 shrink-0">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-600 truncate">Email Desk</div>
                    <a
                      href={`mailto:${contactInfo.salesEmail}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-red-700 transition-colors block truncate"
                    >
                      {contactInfo.salesEmail}
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-xs text-slate-600 hover:text-red-700 transition-colors block mt-0.5 truncate hidden sm:block"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5 sm:gap-4 min-w-0">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 shrink-0">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-600 truncate">Warehouse Hub</div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug line-clamp-2">
                      {contactInfo.city}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-2.5 sm:gap-4 min-w-0">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 shrink-0">
                    <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-600 truncate">Dispatch Hours</div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug line-clamp-2">
                      Mon - Sat: 9am - 7pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: RFQ Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-card-elevated">
              
              {submitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display uppercase tracking-wide mb-2">
                    Enquiry Received Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you for contacting Prime Parts. Our technical sales team will review your requirements and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        requirement: 'Engine Components',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company / Workshop Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Auto Services"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Requirement Category */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Part Category / Requirement *
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                    >
                      <option value="Engine & Powertrain">Engine & Powertrain Components</option>
                      <option value="Braking Systems">Heavy-Duty Braking Systems</option>
                      <option value="Suspension & Steering">Suspension & Ride Control</option>
                      <option value="Electricals & Sensors">Electricals, Relays & Sensors</option>
                      <option value="Transmission & Clutch">Clutch & Transmission Units</option>
                      <option value="Dealership & Partnership">Dealership & Network Distribution</option>
                      <option value="Bulk Fleet Supply">Commercial Fleet Bulk Supply</option>
                      <option value="Other Requirements">Other Spare Parts Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Specific Part Numbers / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="List your required part numbers, vehicle models, batch quantities, or delivery destination..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                    >
                      {loading ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Submit RFQ & Order Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
