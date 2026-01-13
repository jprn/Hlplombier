import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Phone, FileText, Star, MapPin, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const phoneNumber = '07 45 08 90 80';

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
          alt="Plombier professionnel en intervention à Besançon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>

      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-amber-400/30"
          >
            <div className="flex items-center gap-1 text-amber-300">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">4,8/5</span>
            </div>
            <span className="text-white/60">•</span>
            <span className="text-white/90 text-sm">122 avis Google</span>
            <span className="text-white/60">•</span>
            <div className="flex items-center gap-1 text-blue-300 text-sm font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Besançon</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Plombier à Besançon
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Dépannage 24h/24</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            Dépannage plomberie, rénovation, urgences… Philippe intervient rapidement 
            pour tous vos besoins en plomberie à Besançon. <strong className="text-white">Travail soigné, tarifs transparents.</strong>
          </motion.p>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {[
              { icon: Clock, text: 'Intervention < 2h' },
              { icon: Shield, text: 'Devis gratuit' },
              { icon: CheckCircle2, text: 'Tarifs annoncés' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-2xl shadow-blue-600/50 hover:shadow-blue-600/70 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-sm text-blue-100">Appeler maintenant</span>
                <span className="block text-lg">{phoneNumber}</span>
              </div>
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all border border-white/20"
            >
              <FileText className="w-5 h-5" />
              Demander un devis
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Card - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden xl:block absolute right-8 2xl:right-20 top-1/2 -translate-y-1/2 w-80"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="text-white font-bold">HL</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Philippe</p>
              <p className="text-sm text-blue-600 font-medium">Artisan plombier</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-slate-600">Disponible maintenant</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-slate-600">Intervention rapide</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-slate-600">Devis gratuit et clair</span>
            </div>
          </div>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-600/30"
          >
            Appeler maintenant
          </a>
        </div>
      </motion.div>
    </section>
  );
}