import React from 'react';
import { Phone, Search, Wrench, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Vous nous appelez',
      description: 'Décrivez votre problème par téléphone. Philippe évalue la situation et vous donne un premier avis.',
    },
    {
      number: '02',
      icon: Search,
      title: 'Diagnostic sur place',
      description: 'Intervention rapide à votre domicile. Diagnostic précis du problème et devis clair avant toute réparation.',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Réparation',
      description: 'Intervention soignée avec explication de ce qui est fait. Travail propre, on nettoie après notre passage.',
    },
    {
      number: '04',
      icon: FileText,
      title: 'Facturation claire',
      description: 'Facture détaillée correspondant au devis. Paiement flexible. Document pour votre assurance si besoin.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4"
          >
            Notre processus
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Comment ça se passe ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Que ce soit une urgence ou un projet de rénovation, 
            notre intervention est simple, rapide et transparente.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              <div className="relative z-10 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                {/* Number */}
                <span className="text-5xl font-bold text-white/10 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="tel:0745089080"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-amber-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Appeler maintenant : 07 45 08 90 80
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}