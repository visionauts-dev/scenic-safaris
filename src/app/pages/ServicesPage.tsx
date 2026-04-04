import { Church, Landmark, Mountain, Sparkles } from 'lucide-react';

export function ServicesPage() {
  const keralaHighlights = [
    'Munnar - Tea Gardens',
    'Alleppey - Houseboats',
    'Thekkady - Wildlife Trails',
    'Wayanad - Mountain Escapes',
    'Kovalam - Beach Retreat',
    'Varkala - Cliffs & Coastline',
    'Kochi - Heritage Walks',
    'Athirappilly - Waterfalls'
  ];

  const pilgrimageDestinations = [
    'Tirupati - Venkateswara',
    'Shirdi - Sai Baba Temple',
    'Varanasi - Spiritual Ghat Tour',
    'Kedarnath - Himalayan Shrine',
    'Vaishno Devi - Pilgrimage',
    'Rameswaram - Sacred Circuit'
  ];

  const services = [
    {
      icon: Mountain,
      title: 'Kerala Tour Packages',
      description: 'Affordable and unforgettable Kerala journeys across hill stations, backwaters, beaches, and wildlife.',
      image: 'https://images.unsplash.com/photo-1650884905385-8f4454767ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxscyUyMGluZGlhfGVufDF8fHx8MTc2OTkzNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      destinations: keralaHighlights,
      color: 'var(--forest-green)'
    },
    {
      icon: Landmark,
      title: 'Cultural & Heritage Tours',
      description: 'Explore Kerala\'s living traditions, cuisine, local art forms, and timeless heritage experiences.',
      image: 'https://images.unsplash.com/photo-1765700325742-b52f566bf6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGhlcml0YWdlJTIwdHJhdmVsfGVufDF8fHx8MTc2OTkzNzAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Fort Kochi Heritage Walks',
        'Traditional Dance & Music',
        'Temple and Festival Tours',
        'Authentic Kerala Cuisine Trails',
        'Handloom and Craft Visits',
        'Museum and Palace Tours'
      ],
      color: 'var(--deep-blue)'
    },
    {
      icon: Church,
      title: 'Pilgrimage Tours',
      description: 'Planned spiritual journeys to major temples and sacred destinations across India.',
      image: 'https://images.unsplash.com/photo-1745647591090-6dcac361600d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBzcGlyaXR1YWwlMjBwaWxncmltYWdlfGVufDF8fHx8MTc2OTkzNjk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      destinations: pilgrimageDestinations,
      color: 'var(--saffron)'
    },
    {
      icon: Sparkles,
      title: 'Customized Packages',
      description: 'Flexible custom tours tailored to your travel style, budget, and preferred schedule.',
      image: 'https://images.unsplash.com/photo-1763480005793-501a0cbe1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBzZXJlbmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTM3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Flexible Duration & Dates',
        'Custom Destination Selection',
        'Budget-Based Planning',
        'Special Interest Tours',
        'Plans for Any Group Size',
        'Dietary Preferences',
        'Accessibility Options',
        'Multi-City Tours'
      ],
      color: '#8B6914'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1699630923504-9a24dbaab37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMHRlbXBsZSUyMGdhbmdhJTIwcml2ZXIlMjBpbmRpYXxlbnwxfHx8fDE3Njk5MzY5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sacred India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Kerala-first travel experiences with culture, pilgrimage, and fully customized tour planning.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14 sm:space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} min-w-0`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: service.color }}>
                    <service.icon className="size-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-[var(--deep-blue)]">{service.title}</h2>
                  <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6">{service.description}</p>
                  
                  {service.destinations && (
                    <div>
                      <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-[var(--deep-blue)]">Popular Destinations:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.destinations.map((dest, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2.5 text-gray-700 min-w-0"
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                              style={{ backgroundColor: service.color }}
                            ></div>
                            <span title={dest} className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap md:overflow-visible md:whitespace-normal md:text-clip text-xs sm:text-sm md:text-[15px] leading-5 sm:leading-6">{dest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {service.features && (
                    <div>
                      <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-[var(--deep-blue)]">What We Offer:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2.5 text-gray-700 min-w-0"
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                              style={{ backgroundColor: service.color }}
                            ></div>
                            <span title={feature} className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap md:overflow-visible md:whitespace-normal md:text-clip text-xs sm:text-sm md:text-[15px] leading-5 sm:leading-6">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={`relative h-[220px] sm:h-[320px] md:h-[380px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 sm:py-16 md:py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--deep-blue)]">What's Included in Our Tours</h2>
            <p className="text-base sm:text-lg text-gray-600">Comprehensive packages designed for your comfort</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Comfortable Transportation',
              'Experienced Tour Guides',
              'Accommodation Options',
              'Meal Arrangements',
              'Entry Tickets & Permits',
              'Travel Insurance Assistance',
              '24/7 Support Helpline',
              'Flexible Itineraries',
              'Safety & Security'
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-5 sm:p-6 rounded-lg shadow-md flex items-center gap-3 sm:gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-[var(--saffron)] flex-shrink-0"></div>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-[var(--deep-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Plan Your Tour?</h2>
          <p className="text-base sm:text-lg text-gray-200 mb-6">
            Contact us today to discuss your travel plans and get a customized itinerary
          </p>
          <a 
            href="/contact"
            className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-6 sm:px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
