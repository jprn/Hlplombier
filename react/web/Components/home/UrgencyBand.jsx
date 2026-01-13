import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Droplets, Flame, CircleOff, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UrgencyBand() {
  const phoneNumber = '07 45 08 90 80';

  const urgencies = [
    {
      icon: Droplets,
      title: 'Fuite d\'eau',
      description: 'Intervention d\'urgence pour stopper la fuite rapidement',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      link: createPageUrl('FuiteEau'),
    },
    {
      icon: Flame,
      title: 'Chauffe-eau en panne',
      description: 'Dépannage ou remplacement de votre cumulus',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
      iconColor: 'text-orange-600',
      link: createPageUrl('ChauffeEau'),
    },
    {
      icon: CircleOff,
      title: 'WC bouché',
      description: 'Débouchage rapide, WC à nouveau fonctionnel',
      color: 'from-purple-600 to-indigo-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      iconColor: 'text-purple-700',
      link: createPageUrl('WCDebouchage'),
    },
  ];

  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {urgencies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group block p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-transparent hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-slate-900 mb-1 group-hover:text-slate-700">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 group-hover:text-slate-900">
                      <Phone className="w-4 h-4" />
                      <span>Appeler maintenant</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}