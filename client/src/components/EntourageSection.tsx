import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-script italic font-bold text-primary mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="text-entourage-title"
        >
          Entourage
        </motion.h2>

        {/* Principal Sponsors */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-script italic text-primary mb-8" data-testid="text-principal-sponsors">Principal Sponsors</h3>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-2">
              <p className="text-sm md:text-lg text-foreground/90">Bro. Juanito G. Sangalang</p>
              <p className="text-sm md:text-lg text-foreground/90">Bro. Mark DG. Fabella</p>
              <p className="text-sm md:text-lg text-foreground/90">Bro. Rodolfo A. Iglesias Jr</p>
              <p className="text-sm md:text-lg text-foreground/90">Bro. Ronaldo G. Luciano</p>
              <p className="text-sm md:text-lg text-foreground/90">Bro. Jupiter Z. Sanjorjo</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm md:text-lg text-foreground/90">Sis. Corazon L. Cascayan</p>
              <p className="text-sm md:text-lg text-foreground/90">Mrs. Sarah J. Lozano</p>
              <p className="text-sm md:text-lg text-foreground/90">Sis. Leticia C. Susas</p>
              <p className="text-sm md:text-lg text-foreground/90">Sis. Nesiel F. Pamintuan</p>
              <p className="text-sm md:text-lg text-foreground/90">Sis. Elsa D. Rosal</p>
            </div>
          </div>
        </motion.div>

        {/* To Guide us on our way */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.9 }}
        >
          <h3 className="text-2xl md:text-3xl font-script italic text-primary mb-8" data-testid="text-guide-title">To Guide us on our way</h3>
        </motion.div>

        {/* Best Man & Maid of Honor */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-script italic text-primary mb-4" data-testid="text-best-man">Best Man</h3>
              <p className="text-sm md:text-lg text-foreground/90">Emmanuel T. Magat</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-script italic text-primary mb-4" data-testid="text-maid-honor">Maid of Honor</h3>
              <p className="text-sm md:text-lg text-foreground/90">Maureen M. Mabao</p>
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.3 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-script italic text-primary mb-4" data-testid="text-groomsmen">Groomsmen</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-lg text-foreground/90">John Kennedy D. Isagunde</p>
                <p className="text-sm md:text-lg text-foreground/90">Marvin D. Rojas</p>
                <p className="text-sm md:text-lg text-foreground/90">Lougie D. Villar</p>
                <p className="text-sm md:text-lg text-foreground/90">Den Chris V. Tacdol</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-script italic text-primary mb-4" data-testid="text-bridesmaids">Bridesmaids</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-lg text-foreground/90">Katleen Joy M. Velante</p>
                <p className="text-sm md:text-lg text-foreground/90">Tiphanie C. Achacosa</p>
                <p className="text-sm md:text-lg text-foreground/90">Alma Bella E. Labarda</p>
                <p className="text-sm md:text-lg text-foreground/90">Suesherie B. Sabado</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;