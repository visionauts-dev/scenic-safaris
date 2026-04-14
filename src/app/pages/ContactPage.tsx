import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const quickMessages = [
  { label: '🗺️ Plan a Tour Package', text: 'Hi, I would like to plan a tour package. Can you help me?' },
  { label: '🕌 Book a Pilgrimage Tour', text: 'Hi, I am interested in booking a pilgrimage tour. Please share details.' },
  { label: '🚗 Book a Cab / Taxi', text: 'Hi, I need to book a cab/taxi. Can you provide details?' },
  { label: '💬 Get a Free Quote', text: 'Hi, I would like to get a free quote for my trip.' },
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--beige)]">
      {/* Hero Section */}
      <section className="bg-[var(--deep-blue)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Contact Us</h1>
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
                      <a href="tel:+919544968931" className="block text-[var(--deep-blue)] hover:text-[var(--saffron)] transition-colors font-medium">
                        +91 95449 68931
                      </a>
                      <a href="tel:+919947091445" className="block text-[var(--deep-blue)] hover:text-[var(--saffron)] transition-colors font-medium">
                        +91 9947 091445
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--saffron)]/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="size-6 text-[var(--saffron)]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 mb-1">Email</h3>
                      <a href="mailto:travel.scenicsafaris@gmail.com" className="text-[var(--deep-blue)] hover:text-[var(--saffron)] transition-colors break-all">
                        travel.scenicsafaris@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--saffron)]/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="size-6 text-[var(--saffron)]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 mb-2">Our Location</h3>
                      <p className="text-[var(--deep-blue)] text-sm">
                        <span className="font-semibold">Alleppey</span><br />
                        Alleppey, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl mb-4 text-[var(--deep-blue)]">Office Hours</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>WhatsApp</span>
                    <span>24 / 7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MessageSquare className="size-7 text-green-600" />
                  </div>
                  <h2 className="text-3xl text-[var(--deep-blue)]">Chat with Us on WhatsApp</h2>
                </div>
                <p className="text-gray-600 mb-8">The fastest way to reach us! Click below to start a conversation — we typically respond within minutes.</p>

                <a
                  href="https://wa.me/919544968931?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-colors text-lg font-semibold mb-8 w-full"
                >
                  <MessageSquare className="size-6" />
                  Start WhatsApp Chat
                </a>

                <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">Quick Enquiries — Tap to Message:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {quickMessages.map((msg) => (
                    <a
                      key={msg.label}
                      href={`https://wa.me/919544968931?text=${encodeURIComponent(msg.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border-2 border-green-200 hover:border-green-500 hover:bg-green-50 text-[var(--deep-blue)] px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                    >
                      {msg.label}
                    </a>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919544968931"
                    className="flex items-center justify-center gap-2 bg-[var(--saffron)] hover:bg-[#e68a2e] text-white px-6 py-3 rounded-lg transition-colors font-medium flex-1"
                  >
                    <Phone className="size-5" />
                    Call +91 95449 68931
                  </a>
                  <a
                    href="tel:+919947091445"
                    className="flex items-center justify-center gap-2 border-2 border-[var(--saffron)] hover:bg-[var(--saffron)]/10 text-[var(--saffron)] px-6 py-3 rounded-lg transition-colors font-medium flex-1"
                  >
                    <Phone className="size-5" />
                    Call +91 9947 091445
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center text-[var(--deep-blue)]">Our Location</h2>
          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
            <div className="bg-[var(--beige)] rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[var(--saffron)]/10 p-3 rounded-lg flex-shrink-0">
                <MapPin className="size-6 text-[var(--saffron)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--deep-blue)] text-lg mb-1">Alleppey</h3>
                <p className="text-gray-600">Alleppey, Kerala, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
                  
    </div>
  );
}
