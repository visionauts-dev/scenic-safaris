import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, MapPin, Users, Headphones, Shield,
  Star, Phone, MessageSquare, ClipboardList, ChevronDown
} from 'lucide-react';

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fleets = [
    { name: 'Sedan', desc: 'Ideal for small families', seats: '4 Seater', icon: '🚗' },
    { name: 'SUV', desc: 'Perfect for group travel', seats: '6–7 Seater', icon: '🚙' },
    { name: 'Tempo Traveller', desc: 'Best for large groups', seats: '12–15 Seater', icon: '🚐' },
    { name: 'Mini Bus', desc: 'Corporate and group tours', seats: '20–25 Seater', icon: '🚌' },
  ];

  const whyUs = [
    { text: 'Reliable and professional service', icon: Shield },
    { text: 'Experienced drivers', icon: Users },
    { text: 'Affordable pricing with transparency', icon: CheckCircle2 },
    { text: 'Wide destination coverage across India', icon: MapPin },
    { text: 'Customized travel options', icon: ClipboardList },
    { text: '24/7 support', icon: Headphones },
  ];

  const steps = [
    { step: '01', title: 'Share your travel plan', icon: MessageSquare },
    { step: '02', title: 'Get a customized quote', icon: ClipboardList },
    { step: '03', title: 'Choose your package or vehicle', icon: CheckCircle2 },
    { step: '04', title: 'Confirm booking', icon: CheckCircle2 },
    { step: '05', title: 'Enjoy your journey', icon: MapPin },
  ];

  const testimonials = [
    {
      name: 'Rahul Menon', location: 'Delhi', rating: 5,
      text: 'We booked a 4-day trip to Munnar and Thekkady with Scenic Safari Tours and Travels, and I have to say the entire experience was flawless. The vehicle was clean, the driver was extremely polite and knowledgeable about the routes, and the itinerary was well planned without feeling rushed. It felt like traveling with someone who genuinely cares about your comfort. Highly recommended for family trips.',
    },
    {
      name: 'Ayesha Khan', location: 'Hyderabad', rating: 5,
      text: 'I recently booked a Shirdi and Nashik pilgrimage tour for my parents, and the service exceeded my expectations. Everything was handled so professionally — from pickup to accommodation guidance. My parents felt safe and comfortable throughout the journey, which was my biggest concern. Thank you for making their spiritual trip so smooth and memorable.',
    },
    {
      name: 'Vishnu Prasad', location: 'Mangalore', rating: 5,
      text: "I use their cab service regularly for airport transfers, and they have never disappointed. Always on time, well-maintained vehicles, and very courteous drivers. It's rare to find such consistent service these days. I would definitely recommend them to anyone looking for a reliable taxi service in Mangalore.",
    },
    {
      name: 'Sneha Reddy', location: 'Bangalore', rating: 5,
      text: 'We planned a Chikmagalur weekend getaway through Scenic Safari Tours and Travels, and it turned out to be one of our best trips. The customization they offered really made a difference — we could travel at our own pace and visit places we actually wanted to see. Everything was smooth, and the pricing was transparent with no hidden charges.',
    },
    {
      name: 'Faisal Ahmed', location: 'Kasaragod', rating: 5,
      text: "Our group trip to Gokarna and Murudeshwar was perfectly organized. The tempo traveller was very comfortable, and the driver was friendly and cooperative throughout the journey. What stood out the most was their responsiveness — they were always just a call away. Great service and a team you can trust.",
    },
  ];

  const faqs = [
    {
      q: 'Do you provide services across Kerala?',
      a: 'Yes, we operate across Kerala and top destinations across India.',
    },
    {
      q: 'Can I book pilgrimage tours?',
      a: 'Yes, we specialize in pilgrimage tours across India.',
    },
    {
      q: 'Do you offer customized packages?',
      a: 'Yes, all packages can be tailored to your needs.',
    },
    {
      q: 'What vehicles are available?',
      a: 'We offer Sedans, SUVs, Tempo Travellers, and Mini Buses to suit every group size and requirement.',
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[620px] md:h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/house.jpeg"
            alt="Alleppey houseboat scenic view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-3">
            Scenic Safari Tours &amp; Travels
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-5 leading-tight font-bold">
            Explore India with<br />Comfort, Faith &amp; Adventure
          </h1>
          <p className="text-base md:text-lg mb-3 max-w-3xl mx-auto text-gray-200">
            Your trusted partner for reliable taxi services, customized tour packages, and unforgettable travel
            experiences across Kerala, Karnataka, and top destinations across India.
          </p>
          <p className="text-sm md:text-base mb-9 max-w-2xl mx-auto text-gray-300">
            From peaceful pilgrimage journeys to scenic hill station retreats and relaxing beach holidays —
            we make every journey smooth, safe, and memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-7 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors font-medium"
            >
              Plan Your Trip <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-7 py-3 rounded-lg border border-white/30 transition-colors font-medium text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+919544968931"
              className="w-full sm:w-auto bg-[var(--deep-blue)]/80 hover:bg-[var(--deep-blue)] text-white px-7 py-3 rounded-lg border border-white/20 transition-colors font-medium inline-flex items-center justify-center gap-2"
            >
              <Phone className="size-4" /> Book Your Ride
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl mb-5 text-[var(--deep-blue)] font-bold">
                Discover God's Own Country with Scenic Safaris
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Welcome to Scenic Safaris Tours and Travels — your trusted partner for affordable and unforgettable
                journeys across Kerala. From misty hill stations and tranquil backwaters to rich wildlife and vibrant
                cultural experiences, we bring you closer to the very best this stunning destination has to offer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe great travel experiences shouldn't come at a high cost. Our tour packages are
                thoughtfully designed to provide maximum value, comfort, and convenience — perfect for individuals,
                couples, families, and groups.
              </p>
              <p className="text-gray-600 mb-3 font-medium">Explore Kerala's finest:</p>
              <ul className="space-y-2 mb-6">
                {[
                  'Lush tea gardens of Munnar',
                  'Serene houseboat cruises in Alleppey',
                  'Wildlife adventures in Periyar',
                  'Scenic hill stations & beach retreats',
                  "Kerala's rich traditions, cuisine & heritage",
                  'Sacred pilgrimage tours across India',
                  'Customized tour packages for every traveller',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="size-4 text-[var(--saffron)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                With strong local expertise and a passion for travel, we handle every detail — from planning your
                itinerary to coordinating transport — so you can relax and enjoy your journey.
              </p>
            </div>

            <div className="relative pb-8 lg:pb-0">
              <img
                src="https://images.unsplash.com/photo-1650884905385-8f4454767ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxscyUyMGluZGlhfGVufDF8fHx8MTc2OTkzNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="India scenic landscape"
                className="rounded-2xl shadow-xl w-full object-cover h-64 sm:h-80 lg:h-[420px]"
              />
              <div className="absolute bottom-2 left-4 lg:-bottom-5 lg:-left-5 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-[var(--saffron)]/10 rounded-full p-2">
                  <Shield className="size-5 text-[var(--saffron)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--deep-blue)] text-sm">Trusted Service</p>
                  <p className="text-xs text-gray-500">500+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fleet ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-2">Our Fleet</p>
            <h2 className="text-3xl md:text-4xl mb-3 text-[var(--deep-blue)] font-bold">
              Comfortable Travel for Every Group Size
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose from a wide range of vehicles tailored to your group size and travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleets.map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-[var(--beige)] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-[var(--warm-beige)]/50 group"
              >
                <div className="text-5xl mb-4">{vehicle.icon}</div>
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-1">{vehicle.name}</h3>
                <p className="text-[var(--saffron)] text-sm font-semibold mb-2">{vehicle.seats}</p>
                <p className="text-gray-600 text-sm">{vehicle.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            All vehicles are clean, well-maintained, and driven by professionals.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-[var(--deep-blue)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-2">
              ⭐ Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl mb-3 font-bold">Experience Travel the Right Way</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              We focus on delivering a travel experience that is smooth, safe, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/10"
              >
                <div className="bg-[var(--saffron)]/20 rounded-full p-2 flex-shrink-0">
                  <item.icon className="size-5 text-[var(--saffron)]" />
                </div>
                <p className="text-gray-200 pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] font-bold">Simple Booking Process</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center relative">
                <div className="w-14 h-14 rounded-full bg-[var(--saffron)] text-white text-lg font-bold flex items-center justify-center shadow-md mb-4 z-10">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[55%] w-[90%] h-px bg-[var(--saffron)]/30" />
                )}
                <p className="text-[var(--deep-blue)] font-semibold text-sm leading-snug">{s.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors font-medium"
            >
              Start Planning Now <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] font-bold">What Our Travellers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[var(--beige)] rounded-2xl p-6 border border-[var(--warm-beige)]/50 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[var(--saffron)] text-[var(--saffron)]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-[var(--warm-beige)]">
                  <div className="w-9 h-9 rounded-full bg-[var(--deep-blue)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--deep-blue)] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-sm font-medium mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-[var(--warm-beige)]/50 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[var(--deep-blue)]">{faq.q}</span>
                  <ChevronDown
                    className={`size-5 text-[var(--saffron)] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-[var(--deep-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-5 font-bold">Ready to Plan Your Journey?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let us help you create an unforgettable experience across India's most beautiful and spiritual destinations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors font-medium"
            >
              Plan Your Trip <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+919544968931"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg border border-white/30 transition-colors font-medium inline-flex items-center gap-2"
            >
              <Phone className="size-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
