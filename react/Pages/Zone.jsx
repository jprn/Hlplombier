import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Car
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Zone() {
  const phoneNumber = '07 45 08 90 80';

  const zones = {
    besancon: [
      'Centre-ville',
      'Planoise',
      'Battant',
      'Chaprais',
      'Bregille',
      'Palente-Orchamps',
      'Velotte',
      'Les Tilleroyes',
      'Saint-Claude',
      'Châteaufarine',
      'Montrapon',
      'Saint-Ferjeux',
      'Butte',
      'Grette',
      'Vaîtes',
      'Clairs-Soleils',
    ],
    grandBesancon: [
      'Miserey-Salines',
      'École-Valentin',
      'Pirey',
      'Franois',
      'Serre-les-Sapins',
      'Avanne-Aveney',
      'Beure',
      'Morre',
      'Montfaucon',
      'Thise',
      'Chalezeule',
      'Roche-lez-Beaupré',
      'Novillars',
      'Devecey',
      'Bonnay',
      'Pouilley-les-Vignes',
    ],
  };

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&q=80"
            alt="Besançon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full mb-6"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Zone d'intervention</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Plombier à Besançon
              <span className="block text-blue-400">et Grand Besançon</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Philippe intervient dans tous les quartiers de Besançon et les communes 
              environnantes. Urgence ou rendez-vous, nous nous déplaçons chez vous.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Clock, text: 'Intervention < 2h' },
                { icon: Car, text: 'Déplacement inclus' },
                { icon: MapPin, text: '24h/24, 7j/7' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43259.95979019544!2d5.9755099!3d47.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d63c88a89e46d%3A0x408ab2ae4bb22c0!2sBesançon!5e0!3m2!1sfr!2sfr!4v1704067200000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone d'intervention HL Plomberie Besançon"
                />
              </div>
              <div className="mt-6 p-6 bg-slate-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Notre adresse</h3>
                    <p className="text-slate-600">5 Rue Paul Gauguin</p>
                    <p className="text-slate-600">25000 Besançon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Intervention rapide sur Besançon et alentours
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Basé au cœur de Besançon, Philippe se déplace dans tous les quartiers 
                de la ville et les communes du Grand Besançon. Notre objectif : 
                intervenir rapidement, quelle que soit votre localisation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Intervention en urgence possible 24h/24',
                  'Frais de déplacement inclus dans le devis',
                  'Même tarif dans tout le Grand Besançon',
                  'Rdv planifiés selon vos disponibilités',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Appeler : {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zones List */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Toutes nos zones d'intervention
            </h2>
            <p className="text-lg text-slate-600">
              Retrouvez ci-dessous la liste des quartiers et communes où nous intervenons.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Besançon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Besançon</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {zones.besancon.map((zone, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Grand Besançon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Grand Besançon</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {zones.grandBesancon.map((zone, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="text-slate-700">
              <strong>Votre commune n'est pas listée ?</strong> Appelez-nous, 
              nous intervenons peut-être dans votre secteur.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Besoin d'un plombier dans votre quartier ?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Philippe intervient rapidement à Besançon et dans tout le Grand Besançon.
            Appelez pour une intervention ou un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
            >
              Formulaire de contact
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}