import React from 'react';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-8"
          >
            Mentions légales
          </motion.h1>

          <div className="prose prose-slate max-w-none">
            <h2>Éditeur du site</h2>
            <p>
              <strong>HL Plomberie</strong><br />
              Philippe Haidar<br />
              5 Rue Paul Gauguin<br />
              25000 Besançon, France<br />
              Téléphone : 07 45 08 90 80
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Base44.<br />
              Les données sont stockées en conformité avec le RGPD.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) 
              est la propriété exclusive de HL Plomberie, à l'exception des éléments provenant 
              de partenaires ou de banques d'images libres de droits.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, transmission, 
              ou exploitation de tout ou partie du contenu de ce site, sans autorisation 
              préalable écrite de HL Plomberie, est strictement interdite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et 
              le site est périodiquement remis à jour, mais peut toutefois contenir des 
              inexactitudes, des omissions ou des lacunes.
            </p>
            <p>
              HL Plomberie ne pourra être tenue responsable des dommages directs ou indirects 
              résultant de l'accès au site ou de l'utilisation des informations qu'il contient.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. 
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter 
              au 07 45 08 90 80 ou via le formulaire de contact du site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}