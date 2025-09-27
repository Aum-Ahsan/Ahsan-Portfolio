import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import ThreeScene from '@/components/ThreeScene';
import PageTransition from '@/components/PageTransition';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ahsanImage from './ahsan.jpeg';

const Hero = () => {
  return (
    <PageTransition className="hero-gradient relative overflow-hidden">
      <ParticlesBackground />
      <ThreeScene />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neon-cyan text-lg md:text-xl font-medium"
              >
                Hello, I'm
              </motion.p>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="gradient-text">Ahsan</span>
              </motion.h1>

              {/* Animated Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-light"
              >
                <div className="flex flex-wrap items-center">
                  {"Full Stack Developer".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        backgroundPosition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 2.0 + index * 0.1
                        }
                      }}
                      className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-[length:200%_100%] bg-clip-text text-transparent font-bold"
                      style={{
                        textShadow: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)"
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                  <motion.span 
                    className="text-neon-purple ml-2"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3.0
                    }}
                  >
                    & Creative Coder
                  </motion.span>
                </div>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Passionate about creating innovative solutions that make a difference.
              </motion.p>
            </motion.div>

            {/* Right Column - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-neon-blue shadow-2xl neon-glow">
                  <img
                    src={ahsanImage}
                    alt="Ahsan - Full Stack Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.currentTarget.src = "./ahsan.jpeg";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-neon-green rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                </div>
                {/* Floating elements around the photo */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-8 -left-8 w-6 h-6 bg-neon-cyan rounded-full opacity-60"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-8 -left-8 w-4 h-4 bg-neon-purple rounded-full opacity-60"
                />
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-1/2 -right-8 w-5 h-5 bg-neon-pink rounded-full opacity-60"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12"
          >
              <Button 
                size="lg" 
                className="neon-glow bg-primary text-primary-foreground hover:bg-primary-glow px-8 py-4 text-lg font-semibold group"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Let's Connect
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-primary-foreground px-8 py-4 text-lg font-semibold group neon-border"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "20+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="text-center cyber-card p-6 hover:scale-105 transition-transform"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 text-neon-blue" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hero;