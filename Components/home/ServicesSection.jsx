import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { 
  Droplets, 
  Flame, 
  CircleOff, 
  Wrench, 
  PipetteIcon, 
  Home,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      icon: Droplets,
      title: 'Fuite d\'eau & dépannage',
      description: 'Détection et réparation de fuites. Intervention rapide pour limiter les dégâts.',
      features: ['Détection de fuite', 'Réparation immédiate', 'Urgence 24/7'],
      link: createPageUrl('FuiteEau'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    },
    {
      icon: Flame,
      title: 'Chauffe-eau / Cumulus',
      description: 'Dépannage, entretien et remplacement de votre chauffe-eau ou ballon d\'eau chaude.',
      features: ['Panne & réparation', 'Remplacement', 'Installation neuve'],
      link: createPageUrl('ChauffeEau'),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    },
    {
      icon: CircleOff,
      title: 'WC / Chasse d\'eau',
      description: 'Débouchage, réparation de mécanisme, WC suspendus ou classiques.',
      features: ['Débouchage', 'Mécanisme chasse', 'WC encastré'],
      link: createPageUrl('WCDebouchage'),
      color: 'from-purple-600 to-indigo-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
    },
    {
      icon: Wrench,
      title: 'Robinetterie / Mitigeur',
      description: 'Remplacement ou réparation de robinets, mitigeurs douche et cuisine.',
      features: ['Mitigeur douche', 'Robinet cuisine', 'Réparation fuite'],
      link: createPageUrl('Services'),
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-yellow-50',
    },
    {
      icon: PipetteIcon,
      title: 'Canalisations',
      description: 'Débouchage, entretien et réparation de vos canalisations et évacuations.',
      features: ['Débouchage', 'Détartrage', 'Évacuations'],
      link: createPageUrl('Services'),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    },
    {
      icon: Home,
      title: 'Rénovation plomberie',
      description: 'Refonte complète ou partielle de votre installation plomberie.',
      features: ['Salle de bain', 'Cuisine', 'Appartement complet'],
      link: createPageUrl('Services'),
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4"
          >
            Nos services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Tous vos besoins en plomberie
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Fuite d'eau, WC, robinetterie, chauffe-eau, canalisations, rénovation… 
            Philippe intervient rapidement pour tous vos travaux de plomberie.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block h-full p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-transparent hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-slate-700" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}