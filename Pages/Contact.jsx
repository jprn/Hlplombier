import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Mail,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    adresse: '',
    type_probleme: '',
    urgence: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.ContactRequest.create(formData);
    setIsSubmitted(true);
    toast.success('Demande envoyée ! Nous vous rappelons rapidement.');
    setIsSubmitting(false);
  };

  const phoneNumber = '07 45 08 90 80';
  const whatsappLink = 'https://wa.me/33745089080';

  if (isSubmitted) {
    return (
      <div className="py-20 lg:py-32 pb-32 lg:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 bg-green-50 rounded-3xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Demande envoyée avec succès !
            </h1>
            <p className="text-slate-600 mb-8">
              Merci pour votre message. Philippe vous rappelle dans les plus brefs délais 
              pour convenir d'un rendez-vous ou vous donner un premier avis.
            </p>
            <p className="text-slate-500 text-sm">
              Urgence ? Appelez directement le{' '}
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="font-semibold text-slate-900">
                {phoneNumber}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Contactez-nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              Besoin d'un plombier à Besançon ? Philippe est disponible 24h/24 pour vos urgences 
              et projets. Appelez directement ou laissez un message.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-900">{phoneNumber}</p>
                <p className="text-slate-500">Appel direct • 24h/24</p>
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-green-600 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-xl">WhatsApp</p>
                <p className="text-white/80">Envoyez photos et messages</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-xl"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-900">24h/24 • 7j/7</p>
                <p className="text-slate-500">Urgences & rendez-vous</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Demander un devis ou une intervention
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom" className="text-slate-700">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      placeholder="Votre nom"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telephone" className="text-slate-700">Téléphone *</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      placeholder="06 00 00 00 00"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="adresse" className="text-slate-700">Adresse / Quartier</Label>
                  <Input
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                    placeholder="Votre adresse ou quartier à Besançon"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label className="text-slate-700">Type de problème *</Label>
                  <Select
                    value={formData.type_probleme}
                    onValueChange={(value) => setFormData({ ...formData, type_probleme: value })}
                    required
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Sélectionnez le type de problème" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fuite_eau">Fuite d'eau</SelectItem>
                      <SelectItem value="chauffe_eau">Chauffe-eau / Cumulus</SelectItem>
                      <SelectItem value="wc_debouchage">WC / Débouchage</SelectItem>
                      <SelectItem value="robinetterie">Robinetterie</SelectItem>
                      <SelectItem value="canalisation">Canalisation</SelectItem>
                      <SelectItem value="renovation">Rénovation plomberie</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700">Description du problème</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre problème ou votre projet..."
                    rows={5}
                    className="mt-1.5 resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgence"
                    checked={formData.urgence}
                    onCheckedChange={(checked) => setFormData({ ...formData, urgence: checked })}
                  />
                  <Label htmlFor="urgence" className="text-slate-700 font-normal cursor-pointer">
                    C'est une urgence (fuite en cours, WC unique bouché, etc.)
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par HL Plomberie 
                  pour répondre à votre demande.
                </p>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Address Card */}
              <div className="p-8 bg-slate-50 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Notre adresse</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <MapPin className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">HL Plomberie</p>
                      <p className="text-slate-600">5 Rue Paul Gauguin</p>
                      <p className="text-slate-600">25000 Besançon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Phone className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{phoneNumber}</p>
                      <p className="text-slate-600">Disponible 24h/24</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5!2d6.0241!3d47.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDE0JzE2LjEiTiA2wrAwMScyNy4xIkU!5e0!3m2!1sfr!2sfr!4v1704067200000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HL Plomberie Besançon"
                />
              </div>

              {/* Trust */}
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">4,8/5 sur Google</p>
                    <p className="text-sm text-slate-600">122 avis clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}