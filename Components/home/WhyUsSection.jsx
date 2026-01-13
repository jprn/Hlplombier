import React from 'react';
import { Clock, Shield, MessageSquare, Calendar, Award, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: Clock,
      title: 'Intervention rapide',
      description: 'Objectif intervention en moins de 2h selon disponibilité. Urgences prioritaires 24h/24.',
      stat: '< 2h',
      statLabel: 'délai moyen',
    },
    {
      icon: Shield,
      title: 'Tarifs transparents',
      description: 'Devis clair avant intervention. Pas de surprise, vous savez exactement ce que vous payez.',
      stat: '0',
      statLabel: 'mauvaise surprise',
    },
    {
      icon: MessageSquare,
      title: 'Explications claires',
      description: 'Philippe prend le temps d\'expliquer le problème et la solution. Vous comprenez ce qui est fait.',
      stat: '100%',
      statLabel: 'transparent',
    },
    {
      icon: Calendar,
      title: 'Disponible 24/7',
      description: 'Urgence le week-end, la nuit ou un jour férié ? Nous intervenons quand vous en avez besoin.',
      stat: '24h',
      statLabel: 'sur 24',
    },
    {
      icon: Award,
      title: 'Travail soigné',
      description: 'Un travail propre et durable. Nous nettoyons après chaque intervention.',
      stat: '4,8/5',
      statLabel: 'satisfaction',
    },
    {
      icon: ThumbsUp,
      title: 'Proximité & confiance',
      description: 'Artisan local basé à Besançon. Une relation de confiance avec nos clients.',
      stat: '122',
      statLabel: 'avis clients',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4 border border-orange-200"
          >
            Nos engagements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Pourquoi choisir HL Plomberie ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Depuis des années, Philippe accompagne les Bisontins avec le même engagement : 
            réactivité, transparence et travail de qualité.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all shadow-sm">
                  <reason.icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-slate-900">{reason.stat}</span>
                  <span className="text-xs text-slate-500">{reason.statLabel}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}