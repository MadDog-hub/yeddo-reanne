import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-sm p-8 md:p-12 max-w-lg w-full mx-4 relative overflow-hidden"
            style={{
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div className="relative text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-wide">
                  A Musical Journey
                </h2>

                <p style={{ color: '#333333' }} className="leading-relaxed text-base md:text-lg font-serif italic px-4">
                  Would you like to play music to explore more of our wedding invitation?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  onClick={() => handleConsent(true)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-5 px-6 rounded-sm transition-all duration-300 hover:scale-105 text-base border-2 border-primary shadow-md"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="outline"
                  className="flex-1 border-2 border-primary hover:border-primary/80 hover:text-primary bg-transparent hover:bg-primary/5 font-medium py-5 px-6 rounded-sm transition-all duration-300 text-base shadow-sm"
                  style={{ color: '#333333' }}
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;