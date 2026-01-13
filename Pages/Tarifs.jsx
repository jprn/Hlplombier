import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  CheckCircle2, 
  Info,
  Shield,
  FileText,
  Clock,
  ArrowRight,
  CreditCard,
  Banknote,
  Building
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function Tarifs() {
  const phoneNumber = '07 45 08 90 80';

  const tarifs = [
    {
      category: 'Dépannage courant',
      items: [
        { service: 'Débouchage WC / évier', price: '80€ - 150€' },
        { service: 'Réparation fuite robinet', price: '80€ - 120€' },
        { service: 'Remplacement mécanisme chasse', price: '90€ - 150€' },
        { service: 'Remplacement mitigeur', price: '120€ - 200€' },
        { service: 'Réparation fuite apparente', price: '80€ - 180€' },
      ]
    },
    {
      category: 'Chauffe-eau / Cumulus',
      items: [
        { service: 'Diagnostic panne', price: 'Gratuit*' },
        { service: 'Remplacement groupe sécurité', price: '120€ - 180€' },
        { service: 'Remplacement thermostat', price: '100€ - 160€' },
        { service: 'Détartrage ballon', price: '120€ - 200€' },
        { service: 'Remplacement chauffe-eau complet', price: '800€ - 1500€' },
      ]
    },
    {
      category: 'Interventions spéciales',
      items: [
        { service: 'Recherche de fuite', price: 'À partir de 150€' },
        { service: 'Débouchage canalisation mécanique', price: '150€ - 300€' },
        { service: 'Remplacement WC complet', price: '350€ - 600€' },
        { service: 'Intervention nuit / week-end', price: '+30% à +50%' },
        { service: 'Rénovation plomberie', price: 'Sur devis' },
      ]
    },
  ];

  const engagements = [
    {
      icon: FileText,
      title: 'Devis gratuit',
      description: 'Diagnostic et devis sur place, sans engagement. Vous savez exactement ce que vous payez avant le début des travaux.'
    },
    {
      icon: Shield,
      title: 'Prix annoncé = prix facturé',
      description: 'Aucune surprise sur la facture. Le prix convenu dans le devis est respecté, sauf si vous demandez des travaux supplémentaires.'
    },
    {
      icon: Info,
      title: 'Explications détaillées',
      description: 'Philippe prend le temps d\'expliquer le problème et la solution. Vous comprenez ce qui est fait et pourquoi.'
    },
    {
      icon: Clock,
      title: 'Pas de facturation au temps',
      description: 'Nous facturons à la prestation, pas à l\'heure. Que l\'intervention dure 30 min ou 1h30, le prix reste celui du devis.'
    },
  ];

  const faqs = [
    {
      question: "Le déplacement est-il payant ?",
      answer: "Non, le déplacement et le diagnostic sont gratuits dans Besançon et le Grand Besançon. Vous ne payez que si vous acceptez le devis et que nous réalisons l'intervention."
    },
    {
      question: "Pourquoi les tarifs sont-ils « à partir de » ?",
      answer: "Le prix exact dépend de plusieurs facteurs : difficulté d'accès, type de matériel nécessaire, pièces à remplacer, durée de l'intervention. Le devis sur place vous donne le prix exact pour votre situation."
    },
    {
      question: "Les tarifs sont-ils plus élevés le week-end ?",
      answer: "Oui, une majoration de 30% à 50% s'applique pour les interventions de nuit (après 20h), le dimanche et les jours fériés. Cette majoration vous est toujours annoncée avant le déplacement."
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons le paiement par carte bancaire, virement bancaire ou espèces. Pour les travaux importants, nous pouvons étudier un paiement en plusieurs fois."
    },
    {
      question: "Puis-je avoir une facture pour mon assurance ?",
      answer: "Oui, nous fournissons systématiquement une facture détaillée. Pour les dégâts des eaux, nous pouvons également rédiger un rapport d'intervention pour votre dossier d'assurance."
    },
  ];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Transparence tarifaire</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Tarifs & Transparence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Chez HL Plomberie, pas de mauvaise surprise. Devis gratuit, prix clairs, 
              et facturation conforme au devis accepté.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tarifs.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <span className="text-slate-600">{item.service}</span>
                      <span className="font-semibold text-slate-900 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>* Diagnostic gratuit :</strong> Le déplacement et le diagnostic sont gratuits 
                  si vous acceptez le devis. En cas de refus, aucun frais ne vous sera demandé.
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  Les tarifs indiqués sont TTC et donnés à titre indicatif. Le prix exact est établi 
                  sur devis après diagnostic de votre situation spécifique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos engagements tarifaires
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              La transparence est au cœur de notre relation client. 
              Vous savez toujours ce que vous payez et pourquoi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-2xl"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moyens de paiement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Paiement simple et flexible
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Nous vous facilitons le règlement avec plusieurs options de paiement.
                Pour les travaux importants, des facilités peuvent être étudiées.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CreditCard, text: 'Carte bancaire (sur place)' },
                  { icon: Building, text: 'Virement bancaire' },
                  { icon: Banknote, text: 'Espèces' },
                  { icon: FileText, text: 'Facture détaillée systématique' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-slate-900 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Besoin d'un devis ?</h3>
              <p className="text-white/70 mb-6">
                Décrivez-nous votre problème par téléphone. Philippe vous donnera 
                une première estimation et interviendra pour un devis précis.
              </p>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
              <p className="text-white/50 text-sm mt-4">
                Devis gratuit • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Questions sur nos tarifs
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
            Demandez votre devis gratuit
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Diagnostic sur place, prix clair, aucune mauvaise surprise.
            Appelez Philippe pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
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