import React from 'react';
import { motion } from 'framer-motion';

export default function Confidentialite() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-8"
          >
            Politique de confidentialité
          </motion.h1>

          <div className="prose prose-slate max-w-none">
            <p>
              Dernière mise à jour : Janvier 2025
            </p>

            <h2>1. Collecte des données personnelles</h2>
            <p>
              HL Plomberie collecte les données personnelles suivantes lorsque vous utilisez 
              notre formulaire de contact :
            </p>
            <ul>
              <li>Nom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email (optionnel)</li>
              <li>Adresse ou quartier (optionnel)</li>
              <li>Description de votre problème</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul>
              <li>Vous recontacter suite à votre demande</li>
              <li>Établir un devis</li>
              <li>Planifier une intervention</li>
              <li>Assurer le suivi de votre dossier</li>
            </ul>
            <p>
              Nous ne vendons, n'échangeons, ni ne louons vos données personnelles à des tiers.
            </p>

            <h2>3. Conservation des données</h2>
            <p>
              Vos données sont conservées pendant une durée maximale de 3 ans après votre 
              dernière interaction avec nos services, conformément aux obligations légales 
              et comptables.
            </p>

            <h2>4. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
              pour protéger vos données personnelles contre tout accès non autorisé, 
              modification, divulgation ou destruction.
            </p>

            <h2>5. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
              <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> demander la limitation du traitement</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous au 07 45 08 90 80 ou via le formulaire 
              de contact du site.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Ce site utilise des cookies techniques essentiels au fonctionnement du site. 
              Ces cookies ne collectent pas de données personnelles à des fins publicitaires.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité 
              à tout moment. Les modifications seront publiées sur cette page avec une 
              date de mise à jour.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou 
              vos données personnelles :
            </p>
            <p>
              <strong>HL Plomberie</strong><br />
              5 Rue Paul Gauguin<br />
              25000 Besançon<br />
              Téléphone : 07 45 08 90 80
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}