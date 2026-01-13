import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function FAQSection() {
  const faqs = [
    {
      question: "Quel est votre délai d'intervention en urgence ?",
      answer: "Notre objectif est d'intervenir en moins de 2 heures pour les urgences (fuite d'eau importante, WC bouché unique, panne de chauffe-eau). Le délai exact dépend de notre planning et de votre localisation dans le Grand Besançon. Nous vous informons dès votre appel du créneau disponible."
    },
    {
      question: "Intervenez-vous la nuit, le week-end et les jours fériés ?",
      answer: "Oui, HL Plomberie est disponible 24h/24, 7j/7, y compris les week-ends et jours fériés (Noël, 1er janvier, etc.). Les tarifs peuvent varier selon l'horaire d'intervention, mais nous vous informons toujours du prix avant de nous déplacer."
    },
    {
      question: "Combien coûte un dépannage plomberie ?",
      answer: "Le coût dépend de la nature de l'intervention. Un diagnostic et devis gratuit est réalisé sur place avant toute réparation. Comptez en moyenne 80-150€ pour un dépannage simple (robinet, WC), 150-300€ pour une fuite, et 800-1500€ pour un remplacement de chauffe-eau (pose comprise). Tarifs indicatifs, devis personnalisé systématique."
    },
    {
      question: "Le devis est-il gratuit ?",
      answer: "Oui, le déplacement et le diagnostic sont gratuits pour les particuliers dans Besançon et le Grand Besançon. Vous recevez un devis clair et détaillé avant toute intervention. Aucun engagement si le devis ne vous convient pas."
    },
    {
      question: "Travaillez-vous avec les assurances ?",
      answer: "Oui, nous fournissons systématiquement une facture détaillée compatible avec les démarches d'assurance (dégât des eaux, etc.). Nous pouvons également rédiger un rapport d'intervention si nécessaire pour votre dossier."
    },
    {
      question: "Quelles zones desservez-vous ?",
      answer: "Nous intervenons dans tout Besançon (Centre, Planoise, Battant, Chaprais, Bregille, Palente, Velotte, etc.) et les communes du Grand Besançon : Miserey-Salines, École-Valentin, Pirey, Franois, Avanne-Aveney, Beure, Morre, Montfaucon et alentours."
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Nous acceptons le paiement par carte bancaire, virement ou espèces. Pour les travaux importants (rénovation, remplacement chauffe-eau), nous pouvons étudier un paiement en plusieurs fois. Parlez-en avec Philippe lors du devis."
    },
    {
      question: "Que faire en attendant votre arrivée en cas de fuite ?",
      answer: "En cas de fuite importante : 1) Coupez l'arrivée d'eau générale (vanne souvent sous l'évier ou au compteur), 2) Coupez l'électricité si l'eau atteint des prises ou appareils, 3) Épongez et placez des récipients sous la fuite. Appelez-nous, Philippe vous guidera par téléphone en attendant son arrivée."
    },
    {
      question: "Faites-vous la rénovation complète de salle de bain ?",
      answer: "Oui, nous réalisons la rénovation complète de la plomberie : remplacement des canalisations, installation douche/baignoire, WC, lavabo, robinetterie. Nous travaillons en coordination avec d'autres artisans (carreleur, électricien) si nécessaire pour un projet clé en main."
    },
    {
      question: "Êtes-vous assuré et qualifié ?",
      answer: "Oui, HL Plomberie est une entreprise déclarée, assurée en responsabilité civile professionnelle et garantie décennale. Philippe est un artisan plombier qualifié avec plusieurs années d'expérience. Nos interventions sont garanties."
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-slate-200 text-slate-700 text-sm font-medium rounded-full mb-4"
          >
            Questions fréquentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Vous avez des questions ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Retrouvez les réponses aux questions les plus courantes. 
            Pour toute autre question, appelez-nous directement.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-slate-200 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-6 [&[data-state=open]]:pb-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}