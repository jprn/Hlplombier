import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  CheckCircle2, 
  Droplets,
  Flame,
  CircleOff,
  Wrench,
  PipetteIcon,
  Home,
  ArrowRight,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const phoneNumber = '07 45 08 90 80';

  const services = [
    {
      icon: Droplets,
      title: 'Fuite d\'eau & dépannage',
      description: 'Détection et réparation de fuites d\'eau urgentes ou non. Intervention rapide pour limiter les dégâts des eaux. Réparation durable avec les bons matériaux.',
      features: ['Détection de fuite', 'Réparation fuite apparente', 'Fuite encastrée', 'Urgence 24h/24'],
      link: createPageUrl('FuiteEau'),
      color: 'blue',
    },
    {
      icon: Flame,
      title: 'Chauffe-eau / Cumulus',
      description: 'Dépannage, entretien et remplacement de votre chauffe-eau électrique ou gaz. Installation de ballon d\'eau chaude neuf. Remplacement possible dans la journée.',
      features: ['Panne & réparation', 'Remplacement cumulus', 'Détartrage', 'Installation neuve'],
      link: createPageUrl('ChauffeEau'),
      color: 'orange',
    },
    {
      icon: CircleOff,
      title: 'WC / Chasse d\'eau / Débouchage',
      description: 'Débouchage de WC, réparation de chasse d\'eau, remplacement de mécanisme. Intervention sur WC classiques et suspendus.',
      features: ['Débouchage WC', 'Mécanisme chasse', 'WC suspendu', 'Remplacement WC'],
      link: createPageUrl('WCDebouchage'),
      color: 'slate',
    },
    {
      icon: Wrench,
      title: 'Robinetterie / Mitigeur',
      description: 'Remplacement ou réparation de robinets, mitigeurs de douche, cuisine, lavabo. Toutes marques. Installation et mise en service.',
      features: ['Mitigeur douche', 'Robinet cuisine', 'Robinet lavabo', 'Réparation fuite'],
      color: 'amber',
    },
    {
      icon: PipetteIcon,
      title: 'Canalisations / Évacuations',
      description: 'Débouchage de canalisations, entretien des évacuations, remplacement de tuyauterie. Techniques manuelles et mécaniques.',
      features: ['Débouchage', 'Détartrage', 'Remplacement', 'Entretien préventif'],
      color: 'emerald',
    },
    {
      icon: Home,
      title: 'Rénovation plomberie',
      description: 'Refonte complète ou partielle de votre installation plomberie. Salle de bain, cuisine, appartement complet. Devis détaillé.',
      features: ['Salle de bain', 'Cuisine', 'Appartement', 'Mise aux normes'],
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', icon: 'bg-blue-100 text-blue-600', badge: 'bg-blue-100 text-blue-700' },
    orange: { bg: 'bg-orange-50', icon: 'bg-orange-100 text-orange-600', badge: 'bg-orange-100 text-orange-700' },
    slate: { bg: 'bg-slate-100', icon: 'bg-slate-200 text-slate-700', badge: 'bg-slate-200 text-slate-700' },
    amber: { bg: 'bg-amber-50', icon: 'bg-amber-100 text-amber-600', badge: 'bg-amber-100 text-amber-700' },
    emerald: { bg: 'bg-emerald-50', icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
    purple: { bg: 'bg-purple-50', icon: 'bg-purple-100 text-purple-600', badge: 'bg-purple-100 text-purple-700' },
  };

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full mb-6"
            >
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium">Nos services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Tous vos travaux de plomberie à Besançon
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Plombier professionnel à Besançon, Philippe réalise tous vos travaux : 
              dépannage urgent, installation, rénovation. Devis gratuit, intervention rapide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl p-8 lg:p-10 ${colorClasses[service.color].bg}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorClasses[service.color].icon}`}>
                        <service.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${colorClasses[service.color].badge}`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>Intervention rapide</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-4 h-4" />
                        <span>Devis gratuit</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4" />
                        <span>4,8/5 avis clients</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Appeler
                    </a>
                    {service.link && (
                      <Link
                        to={service.link}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-colors border border-slate-200"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Pro */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-slate-200 text-slate-700 text-sm font-medium rounded-full mb-4">
                Professionnels
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Agences, syndics, propriétaires bailleurs
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Vous gérez des biens immobiliers à Besançon ? HL Plomberie est votre partenaire 
                de confiance pour les interventions d'urgence et l'entretien régulier.
              </p>
              <div className="space-y-4">
                {[
                  'Intervention rapide sur appel',
                  'Facturation claire et détaillée',
                  'Rapport d\'intervention systématique',
                  'Tarifs préférentiels partenaires',
                  'Coordination avec les locataires',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Devenir partenaire
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Gestion immobilière Besançon"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Un projet ou une urgence ?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Philippe vous répond rapidement pour un devis gratuit ou une intervention.
            Disponible 24h/24 pour les urgences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}