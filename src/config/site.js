// Single source of truth for business contact details.
// Update here and it flows through the header, footer, hero, contact form and WhatsApp button.
export const siteConfig = {
  businessName: 'The Biology Mentor',
  mentorName: 'Ms. Preeti Bhardwaj',
  phoneDisplay: '+971 55 470 9197',
  phoneHref: '+971554709197',
  whatsappNumber: '971554709197',
  email: 'thebiologymentoruae@gmail.com',
  location: 'Dubai, UAE',
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
};

export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
