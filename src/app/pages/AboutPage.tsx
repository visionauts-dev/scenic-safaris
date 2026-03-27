import { Heart, Users, Globe, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Meaningful Experiences',
      description: 'We believe travel should touch the soul and create lasting memories beyond just sightseeing'
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Our tours are designed for individuals, families, and groups of all ages and backgrounds'
    },
    {
      icon: Globe,
      title: 'Cultural Respect',
      description: 'We honor and celebrate the diversity of India\'s traditions with deep reverence'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Excellence in every detail, from planning to execution, ensuring your comfort and satisfaction'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649996255271-9a20a441d25d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWNyZWQlMjBpbmRpYSUyMHNwaXJpdHVhbCUyMGpvdXJuZXl8ZW58MXx8fHwxNzY5OTM3MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sacred India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">About Scenic Safaris</h1>
          <p className="text-xl text-gray-200">Creating journeys that inspire, enlighten, and transform</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[var(--deep-blue)]">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Scenic Safaris was born from a deep appreciation for India's incredible diversity – its sacred 
                  temples, rich cultural heritage, and breathtaking natural beauty. We understand that travel is 
                  more than just visiting places; it's about experiencing the essence of a destination and 
                  connecting with something greater.
                </p>
                <p>
                  Our team consists of passionate travel professionals who have spent years exploring India's 
                  hidden gems and well-known treasures. We believe in creating journeys that are not just vacations, 
                  but transformative experiences that stay with you long after you return home.
                </p>
                <p>
                  Whether you're seeking spiritual enlightenment at ancient pilgrimage sites, wanting to immerse 
                  yourself in local traditions and heritage, or simply looking for a peaceful retreat in the hills, 
                  we design each journey with care, authenticity, and respect for the places we visit.
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765700325742-b52f566bf6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGhlcml0YWdlJTIwdHJhdmVsfGVufDF8fHx8MTc2OTkzNzAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian heritage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-[var(--deep-blue)]">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To provide meaningful, spiritual, cultural, and nature-focused travel experiences that honor India's 
            heritage while ensuring comfort, safety, and authenticity. We aim to create journeys that are not just 
            trips, but life-enriching experiences for individuals, families, and groups from all walks of life.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-[var(--deep-blue)]">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-[var(--beige)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--saffron)] rounded-full mb-4">
                  <value.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-[var(--deep-blue)]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-[var(--deep-blue)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763480005793-501a0cbe1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBzZXJlbmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTM3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Serene landscape"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl mb-6">Designed for Everyone</h2>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  <strong className="text-white">Solo Travelers:</strong> Find peace and spiritual connection on our 
                  carefully guided journeys designed for individual exploration and reflection.
                </p>
                <p>
                  <strong className="text-white">Families:</strong> Create lasting memories with itineraries that 
                  cater to all age groups, ensuring comfort and engagement for everyone.
                </p>
                <p>
                  <strong className="text-white">Groups:</strong> Whether it's a religious organization, cultural 
                  society, or friends traveling together, we customize experiences for groups of any size.
                </p>
                <p>
                  <strong className="text-white">International Visitors:</strong> Discover the real India with 
                  local insights, cultural context, and seamless logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-[var(--deep-blue)]">Begin Your Journey With Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Every journey is more than just travel – it's an opportunity for growth, connection, and discovery
          </p>
          <a 
            href="/contact"
            className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
