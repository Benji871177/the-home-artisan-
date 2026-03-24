/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation, 
  useParams,
  useNavigate
} from 'react-router-dom';
import { 
  Hammer, 
  MessageCircle, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  ArrowRight,
  Instagram,
  MapPin,
  Clock,
  ArrowLeft,
  Target,
  Eye,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, Service, MISSION, VISION } from './constants';

const WHATSAPP_NUMBER = "27640316143"; 

// --- Components ---

const Layout = ({ children, onQuoteClick }: { children: React.ReactNode, onQuoteClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Mission & Vision', path: '/mission-vision' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-amber-200">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 shadow-lg shadow-amber-600/20">
              <Hammer size={28} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter uppercase leading-none ${!scrolled && location.pathname === '/' ? 'text-white md:text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>The Home Artisan</span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 ${!scrolled && location.pathname === '/' ? 'text-white md:text-[#1A1A1A]' : 'text-[#1A1A1A]'}`}>Est. 2014 • Master Craftsmanship</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${location.pathname === link.path ? 'text-amber-600' : (!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-600')}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={onQuoteClick}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 active:scale-95"
            >
              Request a Quote
            </button>
          </div>

          <button className={`md:hidden p-2 ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-[#1A1A1A]'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} className="text-2xl font-bold">{link.name}</Link>
              ))}
              <button 
                onClick={onQuoteClick}
                className="bg-amber-600 text-white py-4 rounded-xl text-lg font-bold"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-600/20">
                  <Hammer size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter uppercase leading-none">The Home Artisan</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Est. 2014 • Master Craftsmanship</span>
                </div>
              </div>
              <p className="text-gray-500 text-lg max-w-md mb-8">
                Your trusted partner for home maintenance and custom craftsmanship. We build with passion, you live with quality.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Contact Info</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <Phone className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="font-medium">064 031 6143</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Mail className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="font-medium">info@thehomeartisan.co.za</span>
                </li>
                <li className="flex gap-4 items-start">
                  <MapPin className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="font-medium">South Africa</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Working Hours</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <Clock className="text-amber-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-sm text-gray-400">Sat: 09:00 - 13:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium">
            <p>© 2026 The Home Artisan. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <button 
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold px-0 group-hover:px-2">
          Chat with us
        </span>
        <MessageCircle size={32} />
      </button>
    </div>
  );
};

// --- Pages ---

const Home = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  return (
    <>
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            alt="Workshop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-amber-600 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Quality • Craftsmanship • Reliability
              </span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-white">
                CRAFTING YOUR <br />
                <span className="text-amber-500">DREAM HOME</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Specializing in custom contemporary and rustic furniture, pergolas, and complete home maintenance. We build with passion, you live with quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onQuoteClick}
                  className="bg-amber-600 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-amber-700 transition-all group shadow-2xl shadow-amber-600/40"
                >
                  Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/services"
                  className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Hammer size={32} />, title: "Expert Craftsmanship", desc: "Years of experience in fine woodworking, metalwork, and structural renovations." },
              { icon: <Target size={32} />, title: "Custom Solutions", desc: "Every project is tailored to your specific vision and space requirements." },
              { icon: <Award size={32} />, title: "Quality Guaranteed", desc: "We use only the finest materials to ensure long-lasting results for your home." }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">OUR SERVICES</h2>
              <p className="text-xl text-gray-500 max-w-xl">From custom furniture to complete home renovations, we offer a wide range of artisan services.</p>
            </div>
            <Link to="/services" className="text-amber-600 font-bold flex items-center gap-2 hover:gap-4 transition-all text-lg">
              Explore All Services <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <Link key={service.id} to={`/services/${service.id}`} className="group relative h-[400px] rounded-[40px] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-12">ABOUT US</h1>
            <div className="aspect-video rounded-[40px] overflow-hidden mb-16 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1500" 
                alt="Our Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="prose prose-xl text-gray-600 leading-relaxed space-y-8 max-w-none">
              <p className="text-2xl font-medium text-[#1A1A1A]">
                The Home Artisan was born out of a deep-seated passion for craftsmanship and a desire to bring high-quality, personalized home maintenance and furniture solutions to South African homeowners.
              </p>
              <p>
                Founded in 2014, we have grown from a small workshop into a full-service renovation and custom build partner. We believe that a home is more than just a structure; it's a reflection of the people who live within it. That's why we approach every project—whether it's a simple painting job or a complex kitchen remodel—with the same level of dedication and attention to detail.
              </p>
              <p>
                Our team consists of skilled artisans, welders, carpenters, and designers who share a common goal: to deliver excellence. We specialize in blending contemporary aesthetics with rustic charm, creating unique spaces and furniture pieces that stand the test of time.
              </p>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Over 10 years of industry experience',
                    'Tailored solutions for every budget',
                    'Commitment to deadlines and quality',
                    'Transparent pricing and communication',
                    'Fully insured and professional team'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 p-10 rounded-[40px]">
                <h3 className="text-3xl font-bold mb-6 text-amber-900">Our Approach</h3>
                <p className="text-amber-800 font-medium leading-relaxed">
                  We don't just "fix" things. We analyze, design, and execute with an artisan's eye. Every weld, every cut, and every brushstroke is done with the intention of adding lasting value to your home.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-16">OUR SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`}
              className="group"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-between">
                {service.title}
                <ChevronRight className="text-amber-600" />
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const MissionVision = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h2 className="text-5xl font-black tracking-tight">OUR MISSION</h2>
            </div>
            <p className="text-3xl font-medium text-gray-700 leading-tight">
              "{MISSION}"
            </p>
          </section>

          <section>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h2 className="text-5xl font-black tracking-tight">OUR VISION</h2>
            </div>
            <p className="text-3xl font-medium text-gray-700 leading-tight">
              "{VISION}"
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-12 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <ul className="space-y-4">
                {['Integrity in every deal', 'Quality without compromise', 'Reliability you can trust', 'Passion for the craft'].map((v, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <CheckCircle2 size={20} className="text-amber-600" /> {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-600 p-12 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-6">Our Promise</h3>
              <p className="text-lg opacity-90">
                We promise to treat your home with the same respect we treat our own. Every project is a testament to our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetail = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div className="pt-32 text-center">Service not found</div>;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors mb-12 font-bold"
        >
          <ArrowLeft size={20} /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 uppercase">{service.title}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed">{service.longDescription}</p>
            </div>

            <div className="bg-gray-50 p-10 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-8">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium text-gray-700">
                    <CheckCircle2 size={20} className="text-amber-600 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onQuoteClick}
              className="w-full md:w-auto bg-amber-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20"
            >
              Request a Quote for {service.title}
            </button>
          </div>

          <div className="sticky top-32">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Router>
      <Layout onQuoteClick={() => setIsQuoteModalOpen(true)}>
        <Routes>
          <Route path="/" element={<Home onQuoteClick={() => setIsQuoteModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail onQuoteClick={() => setIsQuoteModalOpen(true)} />} />
          <Route path="/mission-vision" element={<MissionVision />} />
        </Routes>
      </Layout>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-black tracking-tight mb-2 uppercase">REQUEST A QUOTE</h2>
                    <p className="text-gray-500">Tell us about your project and we'll get back to you.</p>
                  </div>
                  <button 
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Quote request sent! We will contact you soon.'); setIsQuoteModalOpen(false); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input type="text" required className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input type="tel" required className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none" placeholder="064 031 6143" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                    <select required className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Details</label>
                    <textarea rows={4} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 transition-all outline-none resize-none" placeholder="Tell us more about what you need..."></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-amber-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20 active:scale-[0.98]"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}
