import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  ThermometerSun,
  Droplets,
  Zap,
  Clock,
  Shield,
  ArrowRight,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function ChauffeEau() {
  const phoneNumber = '07 45 08 90 80';

  const symptoms = [
    {
      icon: ThermometerSun,
      title: 'Eau tiède ou froide',
      description: 'Votre eau ne chauffe plus correctement ou reste froide ? La résistance ou le thermostat peut être en cause.'
    },
    {
      icon: Droplets,
      title: 'Fuite sous le chauffe-eau',
      description: 'Une flaque d\'eau sous votre cumulus indique souvent une cuve percée ou un groupe de sécurité défaillant.'
    },
    {
      icon: Zap,
      title: 'Disjoncteur qui saute',
      description: 'Le disjoncteur se déclenche quand le chauffe-eau fonctionne ? Problème électrique à diagnostiquer rapidement.'
    },
    {
      icon: AlertTriangle,
      title: 'Bruits anormaux',
      description: 'Claquements, sifflements ou grondements ? Le tartre accumulé ou une pièce défaillante peut en être la cause.'
    },
  ];

  const services = [
    {
      title: 'Dépannage chauffe-eau',
      description: 'Diagnostic et réparation de votre chauffe-eau électrique ou gaz. Remplacement de thermostat, résistance, groupe de sécurité.',
      price: 'À partir de 80€',
    },
    {
      title: 'Remplacement cumulus',
      description: 'Installation d\'un nouveau ballon d\'eau chaude. Dépose de l\'ancien, pose, raccordement et mise en service le jour même si possible.',
      price: 'À partir de 800€',
    },
    {
      title: 'Détartrage',
      description: 'Entretien préventif pour prolonger la durée de vie de votre appareil et maintenir ses performances.',
      price: 'À partir de 120€',
    },
    {
      title: 'Installation neuve',
      description: 'Pose d\'un chauffe-eau dans une construction neuve ou lors d\'une rénovation. Conseil sur le dimensionnement.',
      price: 'Sur devis',
    },
  ];

  const faqs = [
    {
      question: "Mon chauffe-eau ne chauffe plus, que faire ?",
      answer: "Vérifiez d'abord que le disjoncteur dédié est bien enclenché et que le contacteur jour/nuit fonctionne (si applicable). Si tout semble normal côté électrique, le problème vient probablement du thermostat ou de la résistance. Appelez-nous pour un diagnostic rapide."
    },
    {
      question: "Combien coûte le remplacement d'un chauffe-eau ?",
      answer: "Le prix dépend de la capacité (100L, 150L, 200L, 300L), du type (vertical, horizontal, sur socle) et de la complexité de l'installation. Comptez entre 800€ et 1500€ tout compris (fourniture + pose). Devis gratuit et détaillé avant intervention."
    },
    {
      question: "Quelle est la durée de vie d'un cumulus ?",
      answer: "Un chauffe-eau électrique dure en moyenne 10 à 15 ans selon la qualité de l'eau (calcaire) et l'entretien. Un détartrage régulier (tous les 2-3 ans) prolonge significativement sa durée de vie."
    },
    {
      question: "Intervenez-vous en urgence pour un chauffe-eau ?",
      answer: "Oui, nous intervenons 24h/24 pour les pannes de chauffe-eau, particulièrement en cas de fuite. Pour un remplacement, nous pouvons généralement installer un nouveau cumulus dans la journée ou le lendemain selon disponibilité du matériel."
    },
    {
      question: "Faut-il couper l'eau si mon chauffe-eau fuit ?",
      answer: "Oui, en cas de fuite importante, coupez l'arrivée d'eau froide du chauffe-eau (vanne généralement située au-dessus ou sur le côté). Coupez également le disjoncteur dédié par sécurité, puis appelez-nous."
    },
  ];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80"
            alt="Chauffe-eau"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full mb-6"
            >
              <Flame className="w-4 h-4" />
              <span className="text-sm font-medium">Dépannage & remplacement</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Chauffe-eau & Cumulus
              <span className="block text-orange-400">Besançon</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Panne de chauffe-eau, fuite de cumulus, plus d'eau chaude ? Philippe intervient 
              rapidement à Besançon pour dépanner ou remplacer votre ballon d'eau chaude.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
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

      {/* Symptoms */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Reconnaître une panne de chauffe-eau
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ces signes indiquent un problème avec votre ballon d'eau chaude. 
              N'attendez pas que la situation empire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <symptom.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {symptom.title}
                  </h3>
                  <p className="text-slate-600">
                    {symptom.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Fuite de chauffe-eau = urgence
                </h3>
                <p className="text-slate-600">
                  Une fuite sous votre cumulus nécessite une intervention rapide pour éviter 
                  les dégâts des eaux. Coupez l'arrivée d'eau et appelez-nous immédiatement.
                </p>
              </div>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap"
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
              Nos prestations chauffe-eau
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Du dépannage simple au remplacement complet, nous intervenons 
              sur tous types de chauffe-eau électriques et gaz.
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
            * Tarifs indicatifs TTC. Devis personnalisé gratuit après diagnostic sur place.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Pourquoi choisir HL Plomberie pour votre chauffe-eau ?
              </h2>
              <div className="space-y-4">
                {[
                  'Intervention possible dans la journée',
                  'Remplacement de cumulus en quelques heures',
                  'Marques de qualité (Atlantic, Thermor, etc.)',
                  'Devis clair et détaillé avant travaux',
                  'Garantie constructeur + garantie main d\'œuvre',
                  'Enlèvement et recyclage de l\'ancien appareil',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-600">4,8/5 sur 122 avis</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Installation chauffe-eau Besançon"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold text-slate-900">24h/24</p>
                <p className="text-slate-600">Disponible en urgence</p>
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
              Questions fréquentes – Chauffe-eau
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
            Problème de chauffe-eau à Besançon ?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Philippe intervient rapidement pour diagnostiquer et résoudre votre panne. 
            Devis gratuit, tarifs transparents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
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

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Dépannage et remplacement chauffe-eau",
            "provider": {
              "@type": "Plumber",
              "name": "HL Plomberie",
              "telephone": "+33745089080",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5 Rue Paul Gauguin",
                "addressLocality": "Besançon",
                "postalCode": "25000"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Besançon"
            },
            "description": "Dépannage, réparation et remplacement de chauffe-eau et cumulus à Besançon. Intervention rapide 24h/24."
          })
        }}
      />
    </div>
  );
}