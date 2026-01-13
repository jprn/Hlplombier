import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  Droplets,
  Search,
  Wrench,
  Clock,
  Shield,
  ArrowRight,
  Star,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function FuiteEau() {
  const phoneNumber = '07 45 08 90 80';

  const urgentSteps = [
    {
      number: '1',
      title: 'Coupez l\'eau',
      description: 'Fermez la vanne d\'arrêt générale (sous l\'évier ou au compteur).'
    },
    {
      number: '2',
      title: 'Coupez l\'électricité',
      description: 'Si l\'eau atteint des prises ou appareils électriques, coupez le courant.'
    },
    {
      number: '3',
      title: 'Épongez',
      description: 'Placez des serpillières et récipients pour limiter les dégâts.'
    },
    {
      number: '4',
      title: 'Appelez-nous',
      description: 'Philippe vous guide par téléphone et intervient rapidement.'
    },
  ];

  const services = [
    {
      title: 'Fuite apparente',
      description: 'Réparation de fuites visibles sur robinets, raccords, tuyaux apparents. Intervention rapide et efficace.',
      price: 'À partir de 80€',
    },
    {
      title: 'Fuite encastrée',
      description: 'Recherche et réparation de fuites dans les murs ou sols. Utilisation de techniques non destructives si possible.',
      price: 'Sur devis',
    },
    {
      title: 'Détection de fuite',
      description: 'Localisation précise de la fuite grâce à des techniques professionnelles : écoute, caméra, gaz traceur.',
      price: 'À partir de 150€',
    },
    {
      title: 'Remplacement tuyauterie',
      description: 'Changement de canalisations vétustes ou endommagées. Cuivre, PER, multicouche selon votre installation.',
      price: 'Sur devis',
    },
  ];

  const faqs = [
    {
      question: "J'ai une fuite d'eau, que dois-je faire en premier ?",
      answer: "En priorité, coupez l'arrivée d'eau générale pour stopper la fuite. La vanne se trouve généralement sous l'évier de la cuisine ou au niveau du compteur. Si l'eau touche des installations électriques, coupez également le courant. Ensuite, appelez-nous au 07 45 08 90 80 pour une intervention rapide."
    },
    {
      question: "Combien coûte une réparation de fuite ?",
      answer: "Le coût varie selon la nature de la fuite : 80-150€ pour une fuite simple (robinet, raccord visible), 150-300€ pour une fuite plus complexe nécessitant démontage. Pour les fuites encastrées, un devis précis est établi après diagnostic. Le déplacement et le diagnostic sont gratuits."
    },
    {
      question: "Intervenez-vous pour les dégâts des eaux ?",
      answer: "Oui, nous intervenons en urgence pour stopper la fuite et réaliser les premières réparations. Nous fournissons une facture détaillée pour votre déclaration d'assurance. Nous pouvons également rédiger un rapport d'intervention si votre assurance le demande."
    },
    {
      question: "Comment trouvez-vous une fuite cachée ?",
      answer: "Nous utilisons plusieurs techniques selon la situation : écoute au sol/murs avec amplificateur, caméra d'inspection pour les canalisations, gaz traceur pour les fuites sous dalle, et analyse thermique dans certains cas. L'objectif est de localiser précisément la fuite pour minimiser les travaux."
    },
    {
      question: "Une fuite peut-elle attendre demain ?",
      answer: "Une petite fuite goutte à goutte peut attendre quelques heures si vous avez placé un récipient. En revanche, une fuite importante doit être traitée immédiatement pour éviter les dégâts des eaux. Dans le doute, coupez l'eau et appelez-nous, nous évaluerons l'urgence ensemble."
    },
  ];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80"
            alt="Fuite d'eau"
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
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-medium">Urgence 24h/24</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Fuite d'eau
              <span className="block text-blue-400">Besançon</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Fuite d'eau urgente ? Philippe intervient rapidement à Besançon et alentours 
              pour stopper la fuite et réparer. Disponible 24h/24, 7j/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Urgence : {phoneNumber}
              </a>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Demander un devis
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgent Steps */}
      <section className="py-12 bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Fuite en cours ?</h2>
              <p className="text-slate-600">Suivez ces étapes en attendant notre arrivée</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {urgentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-2xl"
              >
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-red-500 text-white font-bold rounded-xl flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="font-semibold text-lg text-slate-900 mb-2 mt-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de fuites */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tous types de fuites d'eau
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quelle que soit l'origine de votre fuite, nous avons la solution.
              Intervention rapide et réparation durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Fuite sous évier', desc: 'Siphon, raccords, flexibles de robinet...' },
              { title: 'Fuite WC', desc: 'Alimentation, évacuation, réservoir...' },
              { title: 'Fuite chauffe-eau', desc: 'Groupe de sécurité, cuve, raccords...' },
              { title: 'Fuite douche/baignoire', desc: 'Mitigeur, flexible, évacuation...' },
              { title: 'Fuite canalisation', desc: 'Tuyaux apparents ou encastrés...' },
              { title: 'Fuite machine à laver', desc: 'Arrivée d\'eau, évacuation...' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos interventions fuite d'eau
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              De la réparation simple à la recherche de fuite complexe,
              Philippe intervient avec le matériel adapté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-xl text-slate-900">
                    {service.title}
                  </h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                    {service.price}
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Intervention rapide</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Devis gratuit</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            * Tarifs indicatifs TTC. Devis personnalisé gratuit sur place.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Notre méthode d'intervention
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Appel et évaluation', desc: 'Décrivez la situation, Philippe vous conseille par téléphone.' },
                  { icon: Clock, title: 'Arrivée rapide', desc: 'Intervention dans les 2h en fonction de notre planning.' },
                  { icon: Search, title: 'Diagnostic précis', desc: 'Localisation de la fuite et explication du problème.' },
                  { icon: Wrench, title: 'Réparation', desc: 'Intervention soignée avec les bons matériaux.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Plombier réparation fuite Besançon"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">&lt; 2h</p>
                <p className="text-white/80">Délai intervention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Questions fréquentes – Fuite d'eau
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Fuite d'eau à Besançon ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Ne laissez pas la fuite s'aggraver. Philippe intervient rapidement 
            pour stopper et réparer. Devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
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