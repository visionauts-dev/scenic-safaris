import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Users,
  Headphones,
  Shield,
  Star,
  Phone,
  MessageSquare,
  ClipboardList,
  ChevronDown,
  X,
  ThumbsUp,
  Award,
  Zap,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const heroImages = [
    { title: 'Alleppey Backwaters', src: '/house.jpeg' },
    {
      title: 'Munnar Hill Stations',
      src: 'https://images.unsplash.com/photo-1650884905385-8f4454767ea3?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Kerala Tea Estates',
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Wildlife Trails',
      src: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Coastal Sunsets',
      src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const galleryImages = [
    { title: 'Alleppey Backwaters', src: '/house.jpeg' },
    { title: 'Munnar Tea Gardens', src: 'https://images.unsplash.com/photo-1650884905385-8f4454767ea3?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Thekkady Forest Trails', src: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Pilgrimage Moments', src: 'https://images.unsplash.com/photo-1745647591090-6dcac361600d?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Kerala Houseboats', src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Heritage Streets', src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Sunset Coastline', src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Hill Station Drive', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
  ];

  const showPrevGalleryImage = () => {
    if (activeGalleryIndex === null) return;
    setActiveGalleryIndex((activeGalleryIndex + galleryImages.length - 1) % galleryImages.length);
  };

  const showNextGalleryImage = () => {
    if (activeGalleryIndex === null) return;
    setActiveGalleryIndex((activeGalleryIndex + 1) % galleryImages.length);
  };

  useEffect(() => {
    if (activeGalleryIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveGalleryIndex(null);
      if (event.key === 'ArrowLeft') showPrevGalleryImage();
      if (event.key === 'ArrowRight') showNextGalleryImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGalleryIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  const whyUs = [
    {
      title: 'Local Kerala Experts',
      text: "Born and raised in God's Own Country - we know every road, trail, and hidden gem.",
      icon: MapPin,
    },
    {
      title: 'Transparent Pricing',
      text: 'No hidden charges. What you see is what you pay. Budget options for every traveller.',
      icon: CheckCircle2,
    },
    {
      title: 'Experienced Drivers',
      text: 'Professional, licensed, and friendly drivers who double as local guides.',
      icon: Users,
    },
    {
      title: '24/7 Support',
      text: "We're reachable round the clock via call or WhatsApp throughout your journey.",
      icon: Headphones,
    },
    {
      title: 'Flexible Packages',
      text: 'Customize duration, destinations, budget, and group size - nothing is fixed.',
      icon: ClipboardList,
    },
    {
      title: 'Trusted by 500+',
      text: 'Hundreds of families, couples, and groups have explored Kerala with us safely.',
      icon: Award,
    },
  ];

  const steps = [
    { step: '01', title: 'Share your travel plan', icon: MessageSquare },
    { step: '02', title: 'Get a customized quote', icon: ClipboardList },
    { step: '03', title: 'Confirm your package', icon: CheckCircle2 },
    { step: '04', title: 'Enjoy your journey', icon: MapPin },
  ];

  const testimonials = [
    {
      name: 'Rahul Menon',
      location: 'Delhi',
      initials: 'RM',
      rating: 5,
      text: 'We booked a 4-day trip to Munnar and Thekkady with Scenic Safari Tours and Travels, and I have to say the entire experience was flawless. The vehicle was clean, the driver was extremely polite and knowledgeable about the routes, and the itinerary was well planned without feeling rushed.',
    },
    {
      name: 'Ayesha Khan',
      location: 'Hyderabad',
      initials: 'AK',
      rating: 5,
      text: 'I recently booked a Shirdi and Nashik pilgrimage tour for my parents, and the service exceeded my expectations. Everything was handled so professionally - from pickup to accommodation guidance. My parents felt safe and comfortable throughout the journey.',
    },
    {
      name: 'Vishnu Prasad',
      location: 'Mangalore',
      initials: 'VP',
      rating: 5,
      text: "I use their cab service regularly for airport transfers, and they have never disappointed. Always on time, well-maintained vehicles, and very courteous drivers. It's rare to find such consistent service these days.",
    },
    {
      name: 'Sneha Reddy',
      location: 'Bangalore',
      initials: 'SR',
      rating: 5,
      text: 'We planned a Chikmagalur weekend getaway through Scenic Safari Tours and Travels, and it turned out to be one of our best trips. The customization they offered really made a difference - we could travel at our own pace.',
    },
    {
      name: 'Faisal Ahmed',
      location: 'Kasaragod',
      initials: 'FA',
      rating: 5,
      text: 'Our group trip to Gokarna and Murudeshwar was perfectly organized. The tempo traveller was very comfortable, and the driver was friendly throughout. What stood out the most was their responsiveness - always just a call away.',
    },
  ];

  const faqs = [
    {
      q: 'Do you provide services across Kerala?',
      a: 'Yes, we operate across all of Kerala and top destinations across India.',
    },
    {
      q: 'Can I book pilgrimage tours?',
      a: 'Yes, we specialize in pilgrimage tours to Guruvayur, Sabarimala, Tirupati, Shirdi, and more.',
    },
    {
      q: 'Do you offer customized packages?',
      a: 'Yes, all packages can be tailored to your needs - dates, budget, group size, accommodation.',
    },
    {
      q: 'What vehicles are available?',
      a: 'We offer Sedans, SUVs, Tempo Travellers, and Mini Buses to suit every group size.',
    },
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative min-h-[580px] md:min-h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            key={heroImages[heroImageIndex].src}
            src={heroImages[heroImageIndex].src}
            alt={heroImages[heroImageIndex].title}
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {heroImages[heroImageIndex].title}
            </span>
            <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Star className="size-3 fill-yellow-400 text-yellow-400" /> 4.9 Google Rating
            </span>
            <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Users className="size-3" /> 500+ Happy Travellers
            </span>
            <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Award className="size-3" /> 8+ Years Experience
            </span>
          </div>

          <p className="text-[var(--saffron)] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
            Kerala's Most Trusted Travel Partner
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-bold">
            Custom Kerala Tours
            <br />
            <span className="text-[var(--saffron)]">with Local Experts</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-7 max-w-2xl mx-auto text-gray-200">
            Backwaters - Hill Stations - Pilgrimage - Wildlife - Heritage - beautifully planned,
            budget-friendly, and unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/services"
              className="w-full sm:w-auto bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 font-semibold shadow-lg transition-colors"
            >
              Explore Packages <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/15 backdrop-blur-sm hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-center transition-colors"
            >
              Get Custom Plan
            </Link>
          </div>

          <p className="mt-5 text-xs text-yellow-300 font-medium flex items-center justify-center gap-1.5">
            <Zap className="size-3" /> Peak season in progress - Limited slots for April-June
          </p>
        </div>
      </section>

      {/* Quick Enquiry Form */}
      <section className="bg-white border-b border-gray-100 py-7">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-500 mb-4 uppercase tracking-widest">
            Plan Your Trip - Get a Free Quote in Minutes
          </p>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center max-w-md mx-auto">
              <CheckCircle2 className="size-8 text-green-500 mx-auto mb-2" />
              <p className="font-semibold text-green-700">Thanks! We'll call you back shortly.</p>
              <p className="text-xs text-gray-500 mt-1">Our team usually responds within 30 minutes.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3"
            >
              <input
                required
                placeholder="Your Name"
                value={enquiryForm.name}
                onChange={(e) => setEnquiryForm((f) => ({ ...f, name: e.target.value }))}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/40 focus:border-[var(--saffron)]"
              />
              <input
                required
                placeholder="Phone Number"
                type="tel"
                value={enquiryForm.phone}
                onChange={(e) => setEnquiryForm((f) => ({ ...f, phone: e.target.value }))}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/40 focus:border-[var(--saffron)]"
              />
              <input
                placeholder="Travel Date (optional)"
                type="date"
                value={enquiryForm.date}
                onChange={(e) => setEnquiryForm((f) => ({ ...f, date: e.target.value }))}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/40 focus:border-[var(--saffron)]"
              />
              <button
                type="submit"
                className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                Get Free Quote
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">
              Moments We Curate
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--deep-blue)] font-bold mb-2">
              Travel Gallery
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Small visual tiles from our journeys. Tap any tile to open a preview and browse next.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.title}
                type="button"
                onClick={() => setActiveGalleryIndex(index)}
                className={`relative overflow-hidden rounded-xl group shadow-sm hover:shadow-lg transition-all text-left ${
                  index % 5 === 0
                    ? 'col-span-2 row-span-2'
                    : index % 3 === 0
                      ? 'row-span-2'
                      : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs sm:text-sm font-medium truncate">
                  {image.title}
                </p>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--saffron)] hover:text-[#e68a2e] font-semibold text-sm"
            >
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {activeGalleryIndex !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveGalleryIndex(null)}
            className="absolute top-5 right-5 text-white/85 hover:text-white"
            aria-label="Close preview"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevGalleryImage();
            }}
            className="absolute left-3 sm:left-6 bg-white/15 hover:bg-white/25 text-white p-2.5 rounded-full"
            aria-label="Previous image"
          >
            <ArrowLeft className="size-5" />
          </button>

          <div
            className="w-full max-w-5xl max-h-[86vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryImages[activeGalleryIndex].src}
              alt={galleryImages[activeGalleryIndex].title}
              className="w-full max-h-[76vh] object-cover rounded-xl"
            />
            <p className="text-center text-white text-sm mt-3">
              {galleryImages[activeGalleryIndex].title}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextGalleryImage();
            }}
            className="absolute right-3 sm:right-6 bg-white/15 hover:bg-white/25 text-white p-2.5 rounded-full"
            aria-label="Next image"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-[var(--deep-blue)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">
              Why Scenic Safaris
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Travel Smarter with Us</h2>
            <p className="text-gray-300 text-sm max-w-md mx-auto">
              Here's why 500+ travellers chose us over generic booking platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white/5 hover:bg-white/10 rounded-xl p-5 border border-white/10 transition-colors"
              >
                <div className="bg-[var(--saffron)]/20 rounded-lg p-2.5 flex-shrink-0 mt-0.5">
                  <item.icon className="size-5 text-[var(--saffron)]" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">4.9 / 5</p>
                <p className="text-gray-300 text-xs">Based on 120+ Google reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
              <ThumbsUp className="size-8 text-[var(--saffron)]" />
              <div>
                <p className="font-bold text-white text-lg leading-none">500+</p>
                <p className="text-gray-300 text-xs">Happy travellers served</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
              <Shield className="size-8 text-[var(--saffron)]" />
              <div>
                <p className="font-bold text-white text-lg leading-none">8+ Years</p>
                <p className="text-gray-300 text-xs">Trusted service in Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">How It Works</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--deep-blue)] font-bold">Book in 4 Simple Steps</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center relative">
                <div className="w-14 h-14 rounded-full bg-[var(--saffron)] text-white text-lg font-bold flex items-center justify-center shadow-md mb-4 z-10">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[57%] w-[86%] h-px bg-[var(--saffron)]/30" />
                )}
                <p className="text-[var(--deep-blue)] font-semibold text-sm leading-snug">{s.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3.5 rounded-xl inline-flex items-center gap-2 font-semibold shadow-md transition-colors"
            >
              Start Planning Now <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">
              Traveller Stories
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--deep-blue)] font-bold">
              Real Reviews, Real People
            </h2>
          </div>

          <Carousel opts={{ align: 'start', loop: true }} className="px-1 sm:px-8">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition-shadow h-full">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 italic line-clamp-5">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-9 h-9 rounded-full bg-[var(--deep-blue)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--deep-blue)] text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex -left-2 lg:-left-4 bg-white border-gray-200" />
            <CarouselNext className="hidden sm:inline-flex -right-2 lg:-right-4 bg-white border-gray-200" />
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[var(--saffron)] uppercase tracking-widest text-xs font-semibold mb-2">FAQ</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--deep-blue)] font-bold">Common Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[var(--beige)] rounded-xl border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[var(--deep-blue)] text-sm">{faq.q}</span>
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

      {/* Final CTA */}
      <section className="py-16 bg-[var(--deep-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">Start Your Kerala Journey Today</h2>
          <p className="text-sm sm:text-base mb-8 text-gray-300 max-w-xl mx-auto">
            Talk to our local experts, get a free itinerary, and book with zero hassle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3.5 rounded-xl inline-flex items-center gap-2 font-semibold shadow-lg transition-colors"
            >
              Get Custom Plan <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+919544968931"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl border border-white/20 font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="size-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
