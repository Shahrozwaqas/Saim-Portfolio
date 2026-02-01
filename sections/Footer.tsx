
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Dribbble, Instagram, Palette, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // STEP: Replace 'YOUR_FORMSPREE_ID' with the ID you get from formspree.io
  // For now, it will use your email as a temporary endpoint (requires verification via Formspree email)
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/mykpkbza`; 

  const socialItems = [
    { Icon: Linkedin, label: 'LinkedIn', href: PERSONAL_INFO.socialLinks.linkedin },
    { Icon: Palette, label: 'Behance', href: PERSONAL_INFO.socialLinks.behance },
    { Icon: Instagram, label: 'Instagram', href: PERSONAL_INFO.socialLinks.instagram }
  ].filter(item => item.href);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-[#141414] text-white pt-24 pb-12 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 mb-24">
          {/* Left: Contact Info */}
          <div className="w-full md:w-[60%] animate-in fade-in slide-in-from-left-8 duration-800">
            <h2 className="font-serif text-3xl md:text-5xl mb-12 leading-tight">
              Ready to bring your<br />ideas to life?
            </h2>

            <div className="space-y-8">
              <div className="group">
                <p className="text-muted text-[13px] font-medium tracking-widest uppercase mb-2">Email</p>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-4 text-xl md:text-2xl hover:text-primary transition-colors duration-300"
                >
                  <Mail className="text-primary" size={24} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>

              <div className="group">
                <p className="text-muted text-[13px] font-medium tracking-widest uppercase mb-2">Phone</p>
                <a 
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center space-x-4 text-xl md:text-2xl hover:text-primary transition-colors duration-300"
                >
                  <Phone className="text-primary" size={24} />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              <div>
                <p className="text-muted text-[13px] font-medium tracking-widest uppercase mb-2">Location</p>
                <div className="flex items-center space-x-4 text-xl md:text-2xl">
                  <MapPin className="text-primary" size={24} />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-muted text-[13px] font-medium tracking-widest uppercase mb-6">Connect with me</p>
              <div className="flex space-x-5">
                {socialItems.map(({ Icon, label, href }) => (
                  <a 
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:text-charcoal transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form / States */}
          <div className="w-full md:w-[40%] animate-in fade-in slide-in-from-right-8 duration-800 delay-200">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-2xl min-h-[450px] flex flex-col justify-center">
              {status === 'sent' ? (
                <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-serif">Message Sent!</h3>
                  <p className="text-white/60">
                    Thank you, Saim has received your message. Expect a response within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-primary font-medium hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                      <AlertCircle size={18} />
                      <span>Oops! Something went wrong. Please try again.</span>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-white text-charcoal py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                 
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted space-y-4 md:space-y-0">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
