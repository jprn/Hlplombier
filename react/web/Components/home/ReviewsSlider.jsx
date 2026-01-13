import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="max-w-2xl mb-6 lg:mb-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4"
            >
              Avis clients
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            >
              Ce que disent nos clients
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-slate-900">4,8/5</span>
              <span className="text-slate-500">• 122 avis Google</span>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl border-slate-200 hover:bg-slate-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl border-slate-200 hover:bg-slate-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / 3)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="h-full p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <Quote className="w-10 h-10 text-amber-400/50 mb-4" />
                    <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-200">
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
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to={createPageUrl('Avis')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Voir tous les avis
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}