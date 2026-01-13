import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  CircleOff,
  Wrench,
  Clock,
  Shield,
  ArrowRight,
  Star,
  Settings
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function WCDebouchage() {
  const phoneNumber = '07 45 08 90 80';

  const problems = [
    {
      title: 'WC bouché',
      description: 'L\'eau ne s\'évacue plus ou remonte. Débouchage rapide avec le matériel adapté.',
      icon: CircleOff,
    },
    {
      title: 'Chasse d\'eau défaillante',
      description: 'Chasse qui coule en continu, qui ne remplit plus, ou manque de puissance.',
      icon: Settings,
    },
    {
      title: 'WC qui fuit',
      description: 'Fuite à la base du WC, au réservoir ou à l\'alimentation.',
      icon: AlertTriangle,
    },
    {
      title: 'Mécanisme cassé',
      description: 'Bouton poussoir, flotteur, clapet : remplacement rapide.',
      icon: Wrench,
    },
  ];

  const services = [
    {
      title: 'Débouchage WC',
      description: 'Intervention rapide pour déboucher vos toilettes. Techniques manuelles ou mécaniques selon l\'obstruction.',
      price: 'À partir de 80€',
    },
    {
      title: 'Remplacement mécanisme',
      description: 'Changement du mécanisme de chasse d\'eau complet ou partiel. Toutes marques.',
      price: 'À partir de 90€',
    },
    {
      title: 'Réparation WC suspendu',
      description: 'Intervention sur bâti-support, mécanisme encastré, plaque de commande.',
      price: 'Sur devis',
    },
    {
      title: 'Remplacement WC',
      description: 'Dépose de l\'ancien WC et installation d\'un nouveau. Évacuation et raccordement.',
      price: 'À partir de 350€',
    },
  ];

  const faqs = [
    {
      question: "Mon WC est bouché, que faire avant votre arrivée ?",
      answer: "Évitez de tirer la chasse à répétition, cela risque de faire déborder. Ne versez pas de produits chimiques qui peuvent endommager les canalisations. Si vous avez une ventouse, vous pouvez tenter quelques mouvements. Sinon, patientez, Philippe arrive rapidement."
    },
    {
      question: "Combien coûte un débouchage de WC ?",
      answer: "Un débouchage simple coûte entre 80€ et 150€ selon la difficulté. Si l'obstruction est plus profonde dans la canalisation, un débouchage mécanique peut être nécessaire (150-250€). Devis gratuit sur place si intervention plus complexe."
    },
    {
      question: "Ma chasse d'eau coule sans arrêt, est-ce urgent ?",
      answer: "Ce n'est pas une urgence absolue, mais cela gaspille beaucoup d'eau et augmente votre facture. Le problème vient généralement du joint du clapet ou du flotteur. Intervention rapide et peu coûteuse pour régler le problème."
    },
    {
      question: "Intervenez-vous sur les WC suspendus ?",
      answer: "Oui, nous intervenons sur tous types de WC : classiques, suspendus avec bâti-support, WC broyeurs. Pour les WC suspendus, nous accédons au mécanisme via la plaque de commande sans casser le mur dans la plupart des cas."
    },
    {
      question: "Mon WC unique est bouché, c'est une urgence ?",
      answer: "Oui, un WC unique bouché est traité en priorité. Nous comprenons l'inconfort de cette situation. Appelez-nous, nous ferons notre maximum pour intervenir dans les plus brefs délais, y compris le soir et le week-end."
    },
  ];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80"
            alt="Salle de bain"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 text-slate-300 rounded-full mb-6"
            >
              <CircleOff className="w-4 h-4" />
              <span className="text-sm font-medium">Débouchage & réparation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              WC & Débouchage
              <span className="block text-amber-400">Besançon</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              WC bouché, chasse d'eau en panne, mécanisme cassé ? Philippe intervient 
              rapidement à Besançon pour déboucher et réparer vos toilettes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Appeler : {phoneNumber}
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

      {/* Problems */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Problèmes de WC fréquents
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quel que soit votre problème de toilettes, nous avons la solution.
              Intervention rapide, réparation durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">
                  WC unique bouché = priorité
                </h3>
                <p className="text-slate-600">
                  Si vous n'avez qu'un seul WC et qu'il est bouché, nous traitons votre demande en priorité.
                  Intervention rapide pour retrouver votre confort.
                </p>
              </div>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Urgence
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos prestations WC
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Du débouchage simple au remplacement complet, 
              nous intervenons sur tous types de WC.
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

      {/* Types de WC */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Intervention sur tous types de WC
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Philippe intervient sur tous les modèles de toilettes, 
                des plus classiques aux plus modernes.
              </p>
              <div className="space-y-4">
                {[
                  'WC classique à poser',
                  'WC suspendu avec bâti-support',
                  'WC broyeur (Sanibroyeur, etc.)',
                  'WC avec lave-mains intégré',
                  'Mécanismes toutes marques (Geberit, Grohe, Siamp...)',
                  'Plaques de commande encastrées',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
                alt="WC moderne Besançon"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-900 font-semibold">4,8/5 • 122 avis</p>
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
              Questions fréquentes – WC & Débouchage
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
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            WC bouché ou en panne à Besançon ?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Philippe intervient rapidement pour déboucher et réparer vos toilettes.
            Devis gratuit, tarifs transparents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
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