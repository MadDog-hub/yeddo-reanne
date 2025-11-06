import { motion } from 'framer-motion';

import attireGuideImage from "@assets/attire guide_1762409305897.png";

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Dusty Blue', color: '#9CADBF', hex: '#9CADBF' },
    { name: 'Blush Pink', color: '#E8C4BC', hex: '#E8C4BC' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <div className="bg-white border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto relative shadow-[0_12px_35px_rgba(230,150,180,0.4)]">
            <div className="space-y-4">
              <div>
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Color Theme
                </p>
                <p className="text-base text-foreground">
                  Dusty Blue and Blush Pink
                </p>
              </div>
              <div className="border-t border-primary/30 pt-4">
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Please Avoid
                </p>
                <p className="text-base text-foreground">
                  No sleeves, mini skirts, jeans, shirts, or slippers
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Attire Guide - Single Image for All Guests */}
        <motion.div 
          className="mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
        >
          <div className="bg-white border border-border rounded-xl p-8 shadow-[0_12px_35px_rgba(230,150,180,0.4)] hover-elegant transition-all duration-500">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 8.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-medium text-foreground mb-4">
                    Dress Code for All Guests
                  </h3>
                </div>
              </motion.div>
              <motion.img 
                src={attireGuideImage}
                alt="Attire guide for gentlemen and women"
                className="w-full max-w-2xl mx-auto object-contain rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 8.5 }}
                data-testid="img-attire-guide"
              />
            </div>
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-white border border-border rounded-xl p-8 shadow-[0_12px_35px_rgba(230,150,180,0.4)] hover-elegant transition-all duration-500">
            <h3 className="text-xl font-body font-medium text-foreground mb-6 text-center">
              Recommended Color Palette
            </h3>
            <p className="text-foreground text-center mb-8">
              Consider these elegant colors when choosing your attire
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              {dressCodeColors.map((colorItem, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="text-sm font-medium text-foreground mt-3">{colorItem.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modern Additional Guidelines */}
        <motion.div 
          className="bg-white border border-border rounded-xl p-8 shadow-[0_12px_35px_rgba(230,150,180,0.4)] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <motion.h3 
            className="text-xl font-body font-medium text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 9.2 }}
          >
            Additional Guidelines
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { 
                title: "Color Theme: Dusty Blue & Blush Pink", 
                description: "We encourage guests to wear these colors to create a beautiful, cohesive atmosphere.",
                delay: 9.4
              },
              { 
                title: "No Sleeves", 
                description: "Please ensure your attire has sleeves out of respect for the religious ceremony.",
                delay: 9.5
              },
              { 
                title: "No Mini Skirts or Jeans", 
                description: "Semi-formal to formal attire is requested. Avoid casual wear including jeans.",
                delay: 9.6
              },
              { 
                title: "No Shirts or Slippers", 
                description: "Proper formal footwear and attire are required for this special occasion.",
                delay: 9.7
              }
            ].map((guideline, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-4 border border-border/50 shadow-[0_8px_20px_rgba(230,150,180,0.3)] hover:shadow-[0_12px_35px_rgba(230,150,180,0.5)] transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: guideline.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{guideline.title}</h4>
                    <p className="text-foreground text-sm leading-relaxed">{guideline.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;