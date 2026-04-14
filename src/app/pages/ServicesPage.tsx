import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Heart,
  MapPinned,
  Route,
  Sparkles,
  Users,
} from 'lucide-react';

export function ServicesPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', travelPlan: '' });
  const [submitted, setSubmitted] = useState(false);

  const serviceCards = [
    {
      icon: MapPinned,
      title: 'Kerala Tour Packages',
      image: '/house.jpeg',
      description:
        'Pre-planned Kerala routes covering backwaters, hills, beaches, and heritage zones with balanced daily schedules.',
      benefits: ['Season-wise route suggestions', 'Budget to premium options', 'Clear cost breakup before booking'],
      ctaLabel: 'Explore',
      ctaHref: '/contact',
    },
    {
      icon: Route,
      title: 'Custom Travel Planning',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
      description:
        'Build your own trip based on dates, budget, group size, and preferred pace instead of fixed package templates.',
      benefits: ['Flexible itinerary edits', 'Local practical guidance', 'Suitable for mixed-age groups'],
      ctaLabel: 'Enquire Now',
      ctaHref: '/contact',
    },
    {
      icon: Car,
      title: 'Cab / Taxi Services',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
      description:
        'Reliable city rides, airport transfers, and full-day outstation cabs with experienced drivers and maintained vehicles.',
      benefits: ['On-time pickups', 'Sedan, SUV, and group vehicles', 'Transparent fare communication'],
      ctaLabel: 'Enquire Now',
      ctaHref: '/contact',
    },
    {
      icon: Heart,
      title: 'Honeymoon Packages',
      image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop',
      description:
        'Private, relaxed itineraries for couples with scenic stays, smooth transfers, and flexible leisure time.',
      benefits: ['Privacy-first stays', 'Comfort-paced travel plan', 'Optional romantic add-ons'],
      ctaLabel: 'Explore',
      ctaHref: '/contact',
    },
    {
      icon: Users,
      title: 'Group Tours',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      description:
        'Coordinated tours for families, friends, and corporate groups with logistics optimized for timing and comfort.',
      benefits: ['Group transport planning', 'Cost-efficient scheduling', 'Dedicated support coordination'],
      ctaLabel: 'Enquire Now',
      ctaHref: '/contact',
    },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hi Scenic Safaris, I would like to enquire. Name: ${formData.name || '-'}, Phone: ${formData.phone || '-'}, Travel Plan: ${formData.travelPlan || '-'}`,
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="relative overflow-hidden pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="absolute inset-0">
          <img
            src="/house.jpeg"
            alt="Kerala service preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e1f3a]/90 via-[#0e1f3a]/78 to-[#d4872f]/38" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(241,157,65,0.28),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <p className="text-[var(--saffron)] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Travel Services Built for Real Trips</h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
            We offer Kerala tour packages, custom planning, and dependable cab services with local execution,
            transparent pricing, and fast support.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-44">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--deep-blue)] text-white">
                    <service.icon className="size-4.5" />
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">{service.title}</h2>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="size-4 text-[var(--saffron)] mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.ctaHref}
                    className="inline-flex items-center justify-center gap-2 bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                  >
                    {service.ctaLabel} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">Why Our Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">
              Better Execution Than Generic Booking Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'We plan by real travel time, not ideal map estimates.',
              'You get clear inclusions and pricing before confirmation.',
              'Itineraries are adjusted to your pace, budget, and comfort.',
              'Support remains active during your trip, not only before booking.',
            ].map((point) => (
              <div key={point} className="bg-[var(--beige)] rounded-xl border border-gray-100 p-5 text-gray-700 text-sm sm:text-base">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Enquiry */}
      <section className="py-16 bg-[var(--deep-blue)] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">Quick Enquiry</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Get a Quote in Minutes</h2>
            <p className="text-gray-300 text-sm sm:text-base">Tell us your plan and we will get back with a practical itinerary and quote.</p>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <Sparkles className="size-7 text-[var(--saffron)] mx-auto mb-2" />
              <p className="font-semibold">Thanks. Your enquiry is received.</p>
              <p className="text-sm text-gray-300 mt-1">We usually respond within 30 minutes.</p>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="bg-white/10 border border-white/25 rounded-lg px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/40"
              />
              <input
                required
                placeholder="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="bg-white/10 border border-white/25 rounded-lg px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/40"
              />
              <input
                required
                placeholder="Travel Plan (e.g. 4 days Munnar + Alleppey)"
                value={formData.travelPlan}
                onChange={(e) => setFormData((prev) => ({ ...prev, travelPlan: e.target.value }))}
                className="bg-white/10 border border-white/25 rounded-lg px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/40 md:col-span-3"
              />
              <button
                type="submit"
                className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Enquiry
              </button>
              <a
                href={`https://wa.me/919544968931?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Enquire on WhatsApp
              </a>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
