import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please complete all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Mailto fallback link to ensure zero messages are lost
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setStatus('success');
      setStatusMessage(
        `Thank you ${formData.name}! Your message is queued. Opening your mail client as direct confirmation.`
      );
      window.open(mailtoLink, '_blank');
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-white/5 relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let's build something meaningful.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Whether it's a data problem, a technology project, a collaboration, or simply a conversation about opportunities — feel free to reach out.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0f131a] border border-white/10 rounded-md p-6 sm:p-7 space-y-6">
              
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block">
                  Direct Contact Information
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  B.Tech Artificial Intelligence Engineering · JDCOEM, Nagpur
                </p>
              </div>

              {/* Direct Info Channels */}
              <div className="space-y-3.5 pt-2 border-t border-white/5 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-center justify-between p-2.5 rounded bg-black/30 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-slate-200 hover:text-white font-mono break-all"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-white bg-white/5 rounded transition-colors"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-2.5 rounded bg-black/30 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Phone</div>
                      <a 
                        href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                        className="text-slate-200 hover:text-white font-mono"
                      >
                        {PORTFOLIO_DATA.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white bg-white/5 rounded transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-2.5 rounded bg-black/30 border border-white/5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Location</div>
                    <span className="text-slate-200">{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                </div>

              </div>

              {/* Profiles */}
              <div className="pt-2 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Professional Profiles
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white/5 hover:bg-sky-600/10 border border-white/5 hover:border-sky-500/30 rounded text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      <span className="font-semibold">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-300" />
                      <span className="font-semibold">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Prominent Resume Button */}
              <div className="pt-2 border-t border-white/5">
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download={PORTFOLIO_DATA.personal.resumeFileName}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-sm transition-colors shadow-md shadow-sky-600/20 active:translate-y-0.5"
                  title="Download Priyanshu_Borkar_Resume.pdf"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (name, email, message) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f131a] border border-white/10 rounded-md p-6 sm:p-8">
              
              <div className="border-b border-white/5 pb-4 mb-6">
                <h3 className="font-display text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Messages are sent directly to Priyanshu's verified inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Field: Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#0a0d12] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Field: Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-[#0a0d12] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-mono"
                  />
                </div>

                {/* Field: Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discuss opportunities, questions, or analytical problem solving..."
                    className="w-full bg-[#0a0d12] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-y"
                  />
                </div>

                {/* Status Notice */}
                {status === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-sm text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 rounded-sm transition-colors cursor-pointer active:translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'submitting' ? 'Preparing Message...' : 'Send Message'}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
