import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Phone, 
  Star,
  ExternalLink,
  Quote,
  ThumbsUp,
  Clock,
  Shield,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Avis() {
  const phoneNumber = '07 45 08 90 80';

  const stats = [
    { value: '4,8', label: 'Note moyenne', suffix: '/5' },
    { value: '122', label: 'Avis clients', suffix: '+' },
    { value: '98', label: 'Recommandations', suffix: '%' },
  ];

  const reviews = [
    {
      name: 'Marie L.',
      rating: 5,
      date: 'Décembre 2024',
      text: 'Intervention très rapide, moins d\'une heure après mon appel ! Philippe a réparé ma fuite sous l\'évier en un temps record. Travail propre, tarif annoncé respecté. Je recommande vivement.',
      service: 'Fuite d\'eau',
    },
    {
      name: 'Thomas B.',
      rating: 5,
      date: 'Novembre 2024',
      text: 'Chauffe-eau en panne un dimanche soir... Philippe est intervenu rapidement et a remplacé le cumulus le lendemain matin. Très professionnel, il a tout expliqué clairement. Prix honnête.',
      service: 'Chauffe-eau',
    },
    {
      name: 'Sophie M.',
      rating: 5,
      date: 'Novembre 2024',
      text: 'WC bouché le jour de Noël ! Philippe est venu en urgence et a résolu le problème rapidement. Très sympathique et professionnel. Facturation claire pour l\'assurance. Merci !',
      service: 'Débouchage WC',
    },
    {
      name: 'Jean-Pierre D.',
      rating: 5,
      date: 'Octobre 2024',
      text: 'Rénovation complète de la plomberie de mon appartement. Travail impeccable, dans les délais et le budget annoncé. Philippe est un artisan sérieux qui prend le temps d\'expliquer.',
      service: 'Rénovation',
    },
    {
      name: 'Céline R.',
      rating: 5,
      date: 'Octobre 2024',
      text: 'Fuite importante dans ma cave, j\'ai appelé en panique. Philippe est arrivé très vite et a tout réparé. Il m\'a rassurée et expliqué ce qu\'il faisait. Prix très correct.',
      service: 'Urgence fuite',
    },
    {
      name: 'Michel G.',
      rating: 5,
      date: 'Septembre 2024',
      text: 'Remplacement d\'un mitigeur de douche. Intervention rapide, propre et efficace. Tarif raisonnable. Je ferai appel à HL Plomberie pour mes prochains travaux.',
      service: 'Robinetterie',
    },
    {
      name: 'Anne-Marie T.',
      rating: 5,
      date: 'Septembre 2024',
      text: 'Problème de chasse d\'eau qui coulait en permanence. Philippe a diagnostiqué le problème et réparé en moins de 30 minutes. Très satisfaite du service.',
      service: 'Chasse d\'eau',
    },
    {
      name: 'Pierre V.',
      rating: 5,
      date: 'Août 2024',
      text: 'Fuite sur un tuyau dans le mur. Philippe a trouvé la fuite rapidement sans tout casser et l\'a réparée proprement. Facture claire, prix justifié. Recommandé.',
      service: 'Recherche fuite',
    },
    {
      name: 'Isabelle M.',
      rating: 4,
      date: 'Août 2024',
      text: 'Intervention pour un évier bouché. Travail bien fait. Le délai d\'attente était un peu long (2h) mais c\'était un samedi. Dans l\'ensemble très satisfaite.',
      service: 'Débouchage',
    },
    {
      name: 'François L.',
      rating: 5,
      date: 'Juillet 2024',
      text: 'Installation d\'un nouveau chauffe-eau suite à une panne. Philippe a été très réactif et a fait le travail dans la journée. Parfait, je recommande !',
      service: 'Chauffe-eau',
    },
  ];

  const highlights = [
    {
      icon: Clock,
      title: 'Réactivité',
      description: '"Intervention en moins d\'une heure"',
    },
    {
      icon: Shield,
      title: 'Transparence',
      description: '"Prix annoncé = prix facturé"',
    },
    {
      icon: ThumbsUp,
      title: 'Professionnalisme',
      description: '"Travail propre et soigné"',
    },
    {
      icon: MessageSquare,
      title: 'Pédagogie',
      description: '"Il explique tout clairement"',
    },
  ];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-1 mb-6"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
              ))}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Ce que disent nos clients
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-8"
            >
              Plus de 120 clients nous ont fait confiance à Besançon. 
              Découvrez leurs témoignages.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="https://www.google.com/search?q=hl+plomberie+besançon+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-colors border border-slate-200"
            >
              Voir sur Google
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}<span className="text-amber-400">{stat.suffix}</span>
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Les points forts cités par nos clients
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-2xl text-center"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 italic">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-amber-400/30 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.service} • {review.date}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?q=hl+plomberie+besançon+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Voir tous les avis Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Faites confiance à Philippe pour vos travaux de plomberie. 
            Intervention rapide, travail soigné, tarifs transparents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}