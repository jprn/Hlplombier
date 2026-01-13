import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ZoneSection() {
  const zones = [
    { name: 'Besançon Centre', primary: true },
    { name: 'Planoise' },
    { name: 'Battant' },
    { name: 'Chaprais' },
    { name: 'Bregille' },
    { name: 'Palente' },
    { name: 'Velotte' },
    { name: 'Tilleroyes' },
    { name: 'Châteaufarine' },
    { name: 'Saint-Claude' },
    { name: 'Orchamps' },
    { name: 'Miserey-Salines' },
    { name: 'École-Valentin' },
    { name: 'Pirey' },
    { name: 'Franois' },
    { name: 'Avanne-Aveney' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4"
            >
              Zone d'intervention
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Besançon et tout le Grand Besançon
            </motion.h2>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-8"
            >
            Philippe intervient dans tous les quartiers de Besançon et les communes 
            environnantes pour tous vos besoins : dépannage, installation, rénovation.
            </motion.p>

            {/* Zones List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {zones.map((zone, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                    zone.primary
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {zone.name}
                </span>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              {[
                'Intervention rapide en urgence',
                'Déplacement inclus dans le devis',
                'Disponible 24h/24, 7j/7',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <Link
              to={createPageUrl('Zone')}
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-amber-600 transition-colors"
            >
              Voir toutes les zones d'intervention
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Google Maps */}
              <div className="relative aspect-square lg:aspect-[4/5]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.234!2d6.024163!3d47.237844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d62f38e37b5e9%3A0x0!2s5%20Rue%20Paul%20Gauguin%2C%2025000%20Besan%C3%A7on!5e0!3m2!1sfr!2sfr!4v1704067200000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HL Plomberie - 5 Rue Paul Gauguin, Besançon"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="text-white font-medium">Basé à Besançon</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    5 Rue Paul Gauguin
                  </h3>
                  <p className="text-white/70">
                    25000 Besançon, France
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              24h/24
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}