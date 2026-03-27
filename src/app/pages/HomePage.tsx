import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Users, Headphones, Shield } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  const tourCategories = [
    {
      title: 'Pilgrimage Tours',
      description: 'Sacred journeys to India\'s most revered spiritual destinations',
      image: 'https://images.unsplash.com/photo-1745647591090-6dcac361600d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjBzcGlyaXR1YWwlMjBwaWxncmltYWdlfGVufDF8fHx8MTc2OTkzNjk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--saffron)'
    },
    {
      title: 'Cultural & Heritage',
      description: 'Explore ancient traditions and historical landmarks',
      image: 'https://images.unsplash.com/photo-1765700325742-b52f566bf6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGhlcml0YWdlJTIwdHJhdmVsfGVufDF8fHx8MTc2OTkzNzAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--deep-blue)'
    },
    {
      title: 'Hill Station Retreats',
      description: 'Peaceful escapes to scenic mountain destinations',
      image: 'https://images.unsplash.com/photo-1650884905385-8f4454767ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxscyUyMGluZGlhfGVufDF8fHx8MTc2OTkzNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--forest-green)'
    },
    {
      title: 'Custom Tours',
      description: 'Personalized itineraries tailored to your preferences',
      image: 'https://images.unsplash.com/photo-1763480005793-501a0cbe1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBzZXJlbmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTM3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#8B6914'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Comfort & Safety',
      description: 'Travel with confidence with our well-maintained vehicles and safety protocols'
    },
    {
      icon: Users,
      title: 'Trusted Guides',
      description: 'Experienced local guides with deep cultural and historical knowledge'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure a smooth travel experience'
    },
    {
      icon: MapPin,
      title: 'Authentic Experiences',
      description: 'Carefully curated experiences that go beyond typical tourism'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1699630923504-9a24dbaab37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMHRlbXBsZSUyMGdhbmdhJTIwcml2ZXIlMjBpbmRpYXxlbnwxfHx8fDE3Njk5MzY5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sacred India landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
            Soulful Journeys Across<br />Sacred & Scenic India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Experience the spiritual richness and natural beauty of India with our thoughtfully designed tours
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/services"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              Explore Our Tours
              <ArrowRight className="size-5" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg border border-white/30 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-[var(--deep-blue)]">Welcome to Scenic Safaris</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in creating meaningful travel experiences that connect you with India's rich spiritual heritage, 
              diverse cultures, and breathtaking natural landscapes. Whether you seek enlightenment at sacred sites, 
              wish to explore ancient traditions, or simply need a peaceful retreat in the mountains, we craft journeys 
              that touch the soul.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--deep-blue)]">Our Tour Categories</h2>
            <p className="text-lg text-gray-600">Choose from our carefully curated travel experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div 
                    className="w-12 h-1 mb-3 rounded" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <h3 className="text-2xl mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--saffron)] hover:text-[#e68a2e] transition-colors"
            >
              View All Services
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--deep-blue)]">Why Choose Scenic Safaris</h2>
            <p className="text-lg text-gray-600">We go beyond ordinary travel to create extraordinary experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--saffron)]/10 rounded-full mb-4">
                  <feature.icon className="size-8 text-[var(--saffron)]" />
                </div>
                <h3 className="text-xl mb-2 text-[var(--deep-blue)]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--deep-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let us help you plan an unforgettable experience across India's most beautiful and spiritual destinations
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/contact"
              className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              Plan Your Journey
              <ArrowRight className="size-5" />
            </Link>
            <a 
              href="tel:+919876543210"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg border border-white/30 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
