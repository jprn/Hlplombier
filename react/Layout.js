import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Phone, MessageCircle, Menu, X, Droplets, MapPin, Clock, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ScrollToTop from './components/ScrollToTop';

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: createPageUrl('Home') },
    { name: 'Services', href: createPageUrl('Services') },
    { name: 'Chauffe-eau', href: createPageUrl('ChauffeEau') },
    { name: 'Fuite d\'eau', href: createPageUrl('FuiteEau') },
    { name: 'WC & Débouchage', href: createPageUrl('WCDebouchage') },
    { name: 'Tarifs', href: createPageUrl('Tarifs') },
    { name: 'Zone', href: createPageUrl('Zone') },
    { name: 'Avis', href: createPageUrl('Avis') },
    { name: 'Contact', href: createPageUrl('Contact') },
  ];

  const phoneNumber = '07 45 08 90 80';
  const whatsappLink = 'https://wa.me/33745089080';

  return (
    <div className="min-h-screen bg-white">
      {/* Bandeau Urgence */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white py-2.5 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <Droplets className="w-4 h-4 animate-pulse" />
          <span>Urgence fuite ? Intervention rapide 24h/24, 7j/7</span>
          <a 
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="ml-2 underline underline-offset-2 hover:no-underline font-semibold"
          >
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964cdd285bae2031828b103/fbfb4f13c_ChatGPTImage12janv202618_18_14.png"
                alt="HL Plomberie Besançon"
                className="h-14 lg:h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigation.slice(0, 7).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                WhatsApp
              </a>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
              >
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/30"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-10 h-10">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-96 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-slate-100">
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964cdd285bae2031828b103/fbfb4f13c_ChatGPTImage12janv202618_18_14.png"
                        alt="HL Plomberie Besançon"
                        className="h-20 w-auto"
                      />
                    </div>
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </Link>
                      ))}
                    </nav>
                    <div className="p-4 border-t border-slate-100 space-y-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Contacter sur WhatsApp
                      </a>
                      <a
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        Appeler {phoneNumber}
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6964cdd285bae2031828b103/fbfb4f13c_ChatGPTImage12janv202618_18_14.png"
                  alt="HL Plomberie Besançon"
                  className="h-20 w-auto mb-4"
                />
                <p className="text-sm text-slate-400">Philippe – Artisan plombier</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Plomberie générale à Besançon : dépannage, installation, rénovation. 
                Service 24h/24, intervention rapide, tarifs transparents.
              </p>
              <div className="flex items-center gap-2 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">4,8/5</span>
                <span className="text-slate-400">• 122 avis Google</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Fuite d\'eau', href: createPageUrl('FuiteEau') },
                  { name: 'Chauffe-eau / Cumulus', href: createPageUrl('ChauffeEau') },
                  { name: 'WC & Débouchage', href: createPageUrl('WCDebouchage') },
                  { name: 'Robinetterie', href: createPageUrl('Services') },
                  { name: 'Rénovation plomberie', href: createPageUrl('Services') },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zone */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Zone d'intervention</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Besançon centre</li>
                <li>Planoise, Battant, Chaprais</li>
                <li>Bregille, Palente, Velotte</li>
                <li>Grand Besançon</li>
                <li>
                  <Link to={createPageUrl('Zone')} className="text-amber-400 hover:text-amber-300 font-medium">
                    Voir toutes les zones →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="font-semibold hover:text-amber-400 transition-colors">
                      {phoneNumber}
                    </a>
                    <p className="text-sm text-slate-400">Disponible 24h/24</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm">5 Rue Paul Gauguin</p>
                    <p className="text-sm text-slate-400">25000 Besançon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-medium">Ouvert 24h/24</p>
                    <p className="text-sm text-slate-400">7 jours sur 7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} HL Plomberie – Tous droits réservés
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <Link to={createPageUrl('MentionsLegales')} className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
                <Link to={createPageUrl('Confidentialite')} className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-4 left-4 right-4 lg:hidden z-40">
        <div className="flex gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-green-600/40"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/40"
          >
            <Phone className="w-5 h-5" />
            Appeler
          </a>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "HL Plomberie",
            "alternateName": "Philippe – HL Plomberie",
            "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
            "url": "https://hl-plomberie.fr",
            "telephone": "+33745089080",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5 Rue Paul Gauguin",
              "addressLocality": "Besançon",
              "postalCode": "25000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 47.2378,
              "longitude": 6.0241
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": {
              "@type": "City",
              "name": "Besançon"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "122"
            },
            "priceRange": "€€"
          })
        }}
      />
    </div>
  );
}