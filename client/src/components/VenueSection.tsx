"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';

import ceremonyImage from "@assets/ceremony_1762409305898.jpg";
import receptionImage from "@assets/reception_1762409305904.jpg";

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'Iglesia Ni Cristo - Lokal ng Ciudad De Victoria [Bulacan South]',
      address: 'Philippine Arena, Bocaue, Bulacan, Philippines',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/kzyTfG66NTaztBuH6',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.2!2d120.949182!3d14.7952083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ad9743d39081%3A0xe9b817c585bdcb8f!2sIglesia%20Ni%20Cristo%20-%20Lokal%20ng%20Ciudad%20De%20Victoria%20%5BBulacan%20South%5D!5e0!3m2!1sen!2sph!4v1730899300000',
      description: 'Join us at Iglesia Ni Cristo Locale of Cuidad de Victoria for our sacred wedding ceremony where we will exchange our vows and unite in faith.',
      details: 'The ceremony begins promptly at 9:00 AM. Please arrive 15-20 minutes early to be seated. Attire: Dusty blue and blush pink theme.',
      startTime: '9:00 AM',
      locationGuide: 'View on Maps →'
    },
    {
      title: 'Reception',
      name: "Angel Gabriel's Garden",
      address: '146 JP Rizal St, Santa Maria, 3022 Bulacan, Philippines',
      image: receptionImage,
      mapUrl: 'https://maps.app.goo.gl/MRra1HVp4TugP1fcA',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.5!2d120.9600317!3d14.8032053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397adbebb22b68d%3A0x8a81d1717270f5b2!2sAngel%20Gabriel\'s%20Garden!5e0!3m2!1sen!2sph!4v1730899200000',
      description: "Celebrate with us at Angel Gabriel's Garden, a beautiful venue where we'll share our joy with family and friends through cocktails, program, and lunch reception.",
      details: 'Following the ceremony, join us at 10:30 AM for cocktails, 11:30 AM program, and 12:00 NN lunch reception.',
      startTime: '10:30 AM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-16 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-4xl font-display mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div 
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-display text-foreground mb-3 text-2xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-muted-foreground mb-3 text-base" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-3xl mx-auto text-center space-y-6 relative">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-sm font-body text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                    {venue.address}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  <p className="text-base font-body leading-relaxed text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                    {venue.description}
                  </p>
                </div>

                {/* Details */}
                <p className="text-base font-body text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                {/* Google Maps Embed */}
                <div className="mt-8 mb-8">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border border-primary/20">
                    <iframe
                      src={venue.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      data-testid={`map-${venue.title.toLowerCase()}-embed`}
                    />
                  </div>
                </div>

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                  <div className="text-left">
                    <p className="text-sm font-body italic text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-guide-btn font-body text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      {venue.locationGuide}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center bg-white border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto shadow-[0_12px_35px_rgba(230,150,180,0.4)]"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-xl font-display text-foreground mb-4">Unplugged Ceremony</h3>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;