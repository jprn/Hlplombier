import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Phone, MessageCircle, MapPin, Clock, Send, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ContactSection() {
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
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 bg-green-50 rounded-3xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Demande envoyée !
            </h3>
            <p className="text-slate-600 mb-8">
              Merci pour votre message. Philippe vous rappelle dans les plus brefs délais 
              pour convenir d'un rendez-vous.
            </p>
            <p className="text-slate-500 text-sm">
              Urgence ? Appelez directement le{' '}
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="font-semibold text-slate-900">
                {phoneNumber}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Besoin d'un plombier ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              Urgence ou devis, contactez Philippe directement par téléphone 
              pour une réponse immédiate, ou laissez un message via le formulaire.
            </motion.p>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{phoneNumber}</p>
                  <p className="text-white/70 text-sm">Appel direct • Disponible 24h/24</p>
                </div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <p className="text-white/70 text-sm">Envoyez photos et messages</p>
                </div>
              </a>
            </motion.div>

            {/* Address & Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 p-6 bg-slate-50 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Adresse</p>
                  <p className="text-slate-600">5 Rue Paul Gauguin, 25000 Besançon</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Disponibilité</p>
                  <p className="text-slate-600">Ouvert 24h/24, 7j/7</p>
                  <p className="text-sm text-slate-500">Week-ends et jours fériés inclus</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-slate-50 rounded-3xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Demander un devis ou une intervention
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom" className="text-slate-700">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      placeholder="Votre nom"
                      required
                      className="mt-1.5 bg-white border-slate-200"
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
                      className="mt-1.5 bg-white border-slate-200"
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
                    className="mt-1.5 bg-white border-slate-200"
                  />
                </div>

                <div>
                  <Label htmlFor="adresse" className="text-slate-700">Adresse / Quartier</Label>
                  <Input
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                    placeholder="Votre adresse ou quartier"
                    className="mt-1.5 bg-white border-slate-200"
                  />
                </div>

                <div>
                  <Label className="text-slate-700">Type de problème *</Label>
                  <Select
                    value={formData.type_probleme}
                    onValueChange={(value) => setFormData({ ...formData, type_probleme: value })}
                    required
                  >
                    <SelectTrigger className="mt-1.5 bg-white border-slate-200">
                      <SelectValue placeholder="Sélectionnez..." />
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
                    placeholder="Décrivez votre problème..."
                    rows={4}
                    className="mt-1.5 bg-white border-slate-200 resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgence"
                    checked={formData.urgence}
                    onCheckedChange={(checked) => setFormData({ ...formData, urgence: checked })}
                  />
                  <Label htmlFor="urgence" className="text-slate-700 font-normal cursor-pointer">
                    C'est une urgence (fuite en cours, WC unique, etc.)
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
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
                  En soumettant ce formulaire, vous acceptez d'être recontacté par HL Plomberie.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}