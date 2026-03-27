import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[var(--beige)]">
      {/* Hero Section */}
      <section className="bg-[var(--deep-blue)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">We're here to help plan your perfect journey</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl mb-6 text-[var(--deep-blue)]">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--saffron)]/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="size-6 text-[var(--saffron)]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-[var(--deep-blue)] hover:text-[var(--saffron)] transition-colors">
                        +91 95449 68931
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--saffron)]/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="size-6 text-[var(--saffron)]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 mb-1">Email</h3>
                      <a href="mailto:travel.scenicsafaris@gmail.com" className="text-[var(--deep-blue)] hover:text-[var(--saffron)] transition-colors">
                        travel.scenicsafaris@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--saffron)]/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="size-6 text-[var(--saffron)]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 mb-1">Office Address</h3>
                      <p className="text-[var(--deep-blue)]">
                        123 Temple Road<br />
                        New Delhi, India<br />
                        110001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl mb-4 text-[var(--deep-blue)]">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="size-5" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center gap-3 bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="size-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl mb-4 text-[var(--deep-blue)]">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl mb-2 text-[var(--deep-blue)]">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] focus:border-transparent"
                        placeholder="+91 95449 68931"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] focus:border-transparent resize-none"
                      placeholder="Tell us about your travel plans, preferred destinations, number of travelers, dates, etc."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
                  >
                    <Send className="size-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center text-[var(--deep-blue)]">Find Us</h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="size-16 mx-auto mb-4 text-[var(--saffron)]" />
              <p className="text-lg">123 Temple Road, New Delhi, India 110001</p>
              <p className="text-sm mt-2">Google Maps integration placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
