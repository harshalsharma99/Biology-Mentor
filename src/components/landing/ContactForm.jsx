import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Calendar, MessageCircle, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site';
import { COUNTRY_CODES } from '@/config/countryCodes';

const initialForm = {
  parentName: '',
  studentName: '',
  yearGroup: '',
  curriculum: '',
  countryCode: '+971',
  phone: '',
  message: '',
};

const STATUS = { IDLE: 'idle', SUBMITTING: 'submitting', SUCCESS: 'success', ERROR: 'error' };

const fieldClass =
  'bg-white/5 border-white/15 text-white placeholder:text-[#5C6D68] focus:border-[#34E7C6] focus:ring-[#34E7C6]/30 h-12 rounded-xl';

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState(STATUS.IDLE);

  const updateField = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!siteConfig.formspreeEndpoint) {
      // No form backend configured yet — fall back to WhatsApp so no enquiry is lost.
      openWhatsApp();
      return;
    }

    setStatus(STATUS.SUBMITTING);
    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'full-contact-form' }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus(STATUS.SUCCESS);
      setFormData(initialForm);
    } catch (error) {
      setStatus(STATUS.ERROR);
    }
  };

  const openWhatsApp = () => {
    const contactNumber = formData.phone ? `${formData.countryCode} ${formData.phone}` : 'not provided yet';
    const message = `Hi Ms. Preeti, I'm interested in Biology tutoring for my child (${
      formData.studentName || 'student'
    }) in ${formData.yearGroup || 'Year [X]'}. Contact number: ${contactNumber}. Please get in touch.`;
    window.open(whatsappLink(message), '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#34E7C6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#B07CFF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#34E7C6] font-medium text-sm tracking-wider uppercase mb-3 block">Get Started Today</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Book Your Free Trial Class</h2>
            <p className="text-[#B9C4C0] text-lg leading-relaxed mb-8">
              Whether your child is struggling or aiming for top grades — in IGCSE, A-Level, CBSE, ICSE, NEET or
              Olympiads — a focused Biology plan makes all the difference.
            </p>

            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
              <h3 className="text-white font-semibold mb-4">What happens in your trial class:</h3>
              <ul className="space-y-3">
                {[
                  "Experience Ms. Preeti's teaching style in a live class",
                  "Quick assessment of your child's current Biology level",
                  'Identify key strengths and gaps',
                  'Walk away with a personalised learning pathway',
                  'No commitment required',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#D8E0DC]">
                    <CheckCircle className="w-5 h-5 text-[#34E7C6] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#34E7C6]/10 border border-[#34E7C6]/25 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#34E7C6]" />
                </div>
                <div>
                  <p className="text-[#8A9A95] text-sm">Phone / WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-[#34E7C6] transition-colors">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#34E7C6]/10 border border-[#34E7C6]/25 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#34E7C6]" />
                </div>
                <div>
                  <p className="text-[#8A9A95] text-sm">Email</p>
                  <p className="text-white font-medium group-hover:text-[#34E7C6] transition-colors">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#34E7C6]/10 border border-[#34E7C6]/25 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#34E7C6]" />
                </div>
                <div>
                  <p className="text-[#8A9A95] text-sm">Location</p>
                  <p className="text-white font-medium">{siteConfig.location} &middot; Online Classes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/[0.04] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-[0_0_60px_rgba(52,231,198,0.08)]">
              {status === STATUS.SUCCESS ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-[#34E7C6]/10 border border-[#34E7C6]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#34E7C6]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-[#B9C4C0] mb-6">
                    Ms. Preeti will be in touch within 24 hours to schedule your free trial class.
                  </p>
                  <button onClick={() => setStatus(STATUS.IDLE)} className="text-[#34E7C6] font-medium hover:underline">
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="parentName" className="text-[#D8E0DC] font-medium mb-2 block">
                        Parent Name *
                      </Label>
                      <Input
                        id="parentName"
                        placeholder="Your name"
                        value={formData.parentName}
                        onChange={updateField('parentName')}
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentName" className="text-[#D8E0DC] font-medium mb-2 block">
                        Student Name *
                      </Label>
                      <Input
                        id="studentName"
                        placeholder="Child's name"
                        value={formData.studentName}
                        onChange={updateField('studentName')}
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="yearGroup" className="text-[#D8E0DC] font-medium mb-2 block">
                        Year Group *
                      </Label>
                      <Select id="yearGroup" value={formData.yearGroup} onChange={updateField('yearGroup')} required className={fieldClass}>
                        <option value="" disabled className="bg-[#0A0E12]">
                          Select year
                        </option>
                        <option value="year9" className="bg-[#0A0E12]">Year 9</option>
                        <option value="year10" className="bg-[#0A0E12]">Year 10</option>
                        <option value="year11" className="bg-[#0A0E12]">Year 11</option>
                        <option value="year12" className="bg-[#0A0E12]">Year 12</option>
                        <option value="year13" className="bg-[#0A0E12]">Year 13</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="curriculum" className="text-[#D8E0DC] font-medium mb-2 block">
                        Curriculum *
                      </Label>
                      <Select id="curriculum" value={formData.curriculum} onChange={updateField('curriculum')} required className={fieldClass}>
                        <option value="" disabled className="bg-[#0A0E12]">
                          Select curriculum
                        </option>
                        <option value="igcse" className="bg-[#0A0E12]">IGCSE</option>
                        <option value="alevel" className="bg-[#0A0E12]">A-Level</option>
                        <option value="cbse" className="bg-[#0A0E12]">CBSE</option>
                        <option value="icse" className="bg-[#0A0E12]">ICSE</option>
                        <option value="neet_olympiad" className="bg-[#0A0E12]">NEET / Olympiad</option>
                        <option value="other" className="bg-[#0A0E12]">Other</option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#D8E0DC] font-medium mb-2 block">
                      Phone / WhatsApp *
                    </Label>
                    <div className="flex gap-3">
                      <Select
                        id="countryCode"
                        value={formData.countryCode}
                        onChange={updateField('countryCode')}
                        className={`${fieldClass} w-[9.5rem] flex-shrink-0`}
                        aria-label="Country code"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-[#0A0E12]">
                            {c.label}
                          </option>
                        ))}
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="XX XXX XXXX"
                        value={formData.phone}
                        onChange={updateField('phone')}
                        required
                        className={`${fieldClass} flex-1`}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#D8E0DC] font-medium mb-2 block">
                      How can we help? (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your child's current situation, goals, or any competitive exams they're preparing for..."
                      value={formData.message}
                      onChange={updateField('message')}
                      rows={4}
                      className={`${fieldClass} h-auto resize-none`}
                    />
                  </div>

                  {status === STATUS.ERROR && (
                    <div className="flex items-start gap-2 text-red-300 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        Something went wrong sending your enquiry. Please try again, or message us directly on
                        WhatsApp below.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === STATUS.SUBMITTING}
                    className="w-full bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] hover:brightness-110 text-[#06120F] py-6 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(52,231,198,0.35)]"
                  >
                    {status === STATUS.SUBMITTING ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Calendar className="w-5 h-5 mr-2" />
                    )}
                    {status === STATUS.SUBMITTING ? 'Sending...' : 'Book Free Trial Class'}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-[#0d1117] text-[#5C6D68]">or reach Ms. Preeti directly</span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full border-2 border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-white py-6 text-lg font-semibold rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
