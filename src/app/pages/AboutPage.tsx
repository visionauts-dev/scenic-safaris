import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Headphones,
  MapPin,
  MessageSquare,
  Shield,
  Star,
  Users,
} from 'lucide-react';

export function AboutPage() {
  const whyChooseUs = [
    'Local drivers and coordinators who know Kerala roads and travel timings',
    'Transparent pricing with clear inclusions before you confirm',
    'Flexible itineraries for couples, families, and group travel',
    'Quick support on call and WhatsApp during your trip',
    'Well-maintained vehicles for budget and premium preferences',
    'Practical route planning to reduce travel fatigue',
  ];

  const testimonials = [
    {
      name: 'Neha Sharma',
      text: 'Everything was exactly as discussed. Driver arrived on time each day and the plan was smooth.',
    },
    {
      name: 'Arjun Menon',
      text: 'Clear pricing, quick communication, and good local recommendations. Very reliable service.',
    },
    {
      name: 'Fathima K',
      text: 'We changed our plan midway and they handled it quickly without confusion.',
    },
  ];

  const steps = [
    {
      title: 'Inquiry',
      description: 'Share your dates, group size, budget, and places you want to visit.',
      icon: MessageSquare,
    },
    {
      title: 'Planning',
      description: 'Receive route options, vehicle choices, and a clear quote with inclusions.',
      icon: ClipboardList,
    },
    {
      title: 'Confirmation',
      description: 'Approve your plan and we finalize transport, schedule, and support details.',
      icon: CheckCircle2,
    },
    {
      title: 'Travel Support',
      description: 'Get on-trip assistance via call and WhatsApp from our local team.',
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-[var(--deep-blue)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1600&auto=format&fit=crop"
            alt="Kerala travel view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1f3a]/88 via-[#0e1f3a]/80 to-[#d4872f]/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--saffron)] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            About Scenic Safaris Tours & Travels
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-4">
            Travel Kerala with a Team That Knows It First-Hand
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            We plan practical itineraries, provide reliable transport, and stay available throughout your trip so
            you can travel with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              Plan Your Trip <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">Who We Are</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-4">
              Local Expertise, Reliable Execution
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Scenic Safaris is a Kerala-based travel and cab service team focused on real execution, not generic
                brochure plans. We coordinate routes, transport, and support with local on-ground knowledge.
              </p>
              <p>
                Our travellers include both budget-conscious and premium guests aged 25–55. We tailor each plan to
                your comfort level, pace, and priorities.
              </p>
              <p>
                From first enquiry to final drop-off, our goal is simple: clear communication, dependable service,
                and stress-free travel.
              </p>
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[360px] lg:h-[430px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop"
              alt="Kerala landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">What You Actually Get</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((point) => (
              <div key={point} className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[var(--saffron)] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">Trust & Proof</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">Built on Consistency</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Trips Completed', value: '1200+' },
              { label: 'Happy Travellers', value: '500+' },
              { label: 'Years of Service', value: '8+' },
              { label: 'Average Rating', value: '4.9/5' },
            ].map((item) => (
              <div key={item.label} className="bg-[var(--deep-blue)] text-white rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[var(--saffron)]">{item.value}</p>
                <p className="text-xs sm:text-sm text-gray-200 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[var(--beige)] border border-gray-100 rounded-xl p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">"{t.text}"</p>
                <p className="text-[var(--deep-blue)] text-sm font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-[var(--deep-blue)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">How We Work</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Simple Process. Clear Communication.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="bg-white/10 border border-white/15 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="size-5 text-[var(--saffron)]" />
                  <span className="text-xs text-gray-300">0{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-3">
            Get Your Custom Itinerary Today
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-7">
            Share your travel plan and get a practical itinerary with a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              Plan Your Trip <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://wa.me/919544968931?text=Hi%2C%20I%20need%20a%20custom%20Kerala%20itinerary."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--deep-blue)] hover:bg-[#10264a] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
