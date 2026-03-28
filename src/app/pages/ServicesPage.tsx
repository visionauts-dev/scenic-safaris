import { Church, Landmark, Mountain, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ServicesPage() {
  const pilgrimageDestinations = [
    'Varanasi - The Spiritual Capital',
    'Kedarnath - Lord Shiva\'s Abode',
    'Tirupati - Venkateswara Temple',
    'Shirdi - Sai Baba Temple',
    'Vaishno Devi - Mountain Shrine',
    'Amritsar - Golden Temple',
    'Haridwar & Rishikesh',
    'Rameswaram - Southern Pilgrimage'
  ];

  const hillStations = [
    'Ooty - The Queen of Hill Stations',
    'Munnar - Tea Gardens Paradise',
    'Manali - Adventure & Serenity',
    'Darjeeling - The Himalayan Gem',
    'Shimla - Colonial Charm',
    'Coorg - Scotland of India',
    'Nainital - Lake District',
    'Kodaikanal - Princess of Hills'
  ];

  const services = [
    {
      icon: Church,
      title: 'Pilgrimage Tours',
      description: 'Experience the divine at India\'s most sacred temples and spiritual centers',
      image: 'https://images.unsplash.com/photo-1745647591090-6dcac361600d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBzcGlyaXR1YWwlMjBwaWxncmltYWdlfGVufDF8fHx8MTc2OTkzNjk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      destinations: pilgrimageDestinations,
      color: 'var(--saffron)'
    },
    {
      icon: Landmark,
      title: 'Cultural & Heritage Tours',
      description: 'Immerse yourself in India\'s rich history, art, and traditions',
      image: 'https://images.unsplash.com/photo-1765700325742-b52f566bf6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGhlcml0YWdlJTIwdHJhdmVsfGVufDF8fHx8MTc2OTkzNzAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'UNESCO World Heritage Sites',
        'Traditional Dance & Music Performances',
        'Local Craft Workshops',
        'Heritage Walk Tours',
        'Museum & Palace Visits',
        'Festival Celebrations',
        'Authentic Local Cuisine',
        'Village Cultural Experiences'
      ],
      color: 'var(--deep-blue)'
    },
    {
      icon: Mountain,
      title: 'Hill Station Retreats',
      description: 'Rejuvenate in the peaceful embrace of India\'s most beautiful mountains',
      image: 'https://images.unsplash.com/photo-1650884905385-8f4454767ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxscyUyMGluZGlhfGVufDF8fHx8MTc2OTkzNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      destinations: hillStations,
      color: 'var(--forest-green)'
    },
    {
      icon: Sparkles,
      title: 'Customized Packages',
      description: 'Tailor-made itineraries designed around your interests and preferences',
      image: 'https://images.unsplash.com/photo-1763480005793-501a0cbe1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBzZXJlbmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTM3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Flexible Duration & Dates',
        'Custom Destination Selection',
        'Budget-Based Planning',
        'Special Interest Tours',
        'Group Size Accommodation',
        'Dietary Preferences',
        'Accessibility Options',
        'Multi-City Combinations'
      ],
      color: '#8B6914'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1699630923504-9a24dbaab37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMHRlbXBsZSUyMGdhbmdhJTIwcml2ZXIlMjBpbmRpYXxlbnwxfHx8fDE3Njk5MzY5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sacred India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Carefully curated travel experiences across India</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: service.color }}>
                    <service.icon className="size-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-[var(--deep-blue)]">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  
                  {service.destinations && (
                    <div>
                      <h3 className="text-xl mb-4 text-[var(--deep-blue)]">Popular Destinations:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.destinations.map((dest, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div 
                              className="w-2 h-2 rounded-full flex-shrink-0" 
                              style={{ backgroundColor: service.color }}
                            ></div>
                            <span>{dest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {service.features && (
                    <div>
                      <h3 className="text-xl mb-4 text-[var(--deep-blue)]">What We Offer:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div 
                              className="w-2 h-2 rounded-full flex-shrink-0" 
                              style={{ backgroundColor: service.color }}
                            ></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={`relative h-[260px] sm:h-[360px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <ImageWithFallback
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
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--deep-blue)]">What's Included in Our Tours</h2>
            <p className="text-lg text-gray-600">Comprehensive packages designed for your comfort</p>
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
                className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-[var(--saffron)] flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--deep-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Plan Your Tour?</h2>
          <p className="text-lg text-gray-200 mb-6">
            Contact us today to discuss your travel plans and get a customized itinerary
          </p>
          <a 
            href="/contact"
            className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
