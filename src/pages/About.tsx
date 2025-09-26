import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { Code, Coffee, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Frontend", level: 95, color: "neon-blue" },
    { name: "Backend", level: 88, color: "neon-purple" },
    { name: "Mobile", level: 82, color: "neon-cyan" },
    { name: "DevOps", level: 75, color: "neon-pink" },
  ];

  const interests = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Coffee, title: "Coffee Lover", description: "Fuel for late-night coding sessions" },
    { icon: Zap, title: "Innovation", description: "Always exploring new technologies" },
    { icon: Heart, title: "Open Source", description: "Contributing to the community" },
  ];

  return (
    <PageTransition className="hero-gradient relative overflow-hidden pt-20">
      <ParticlesBackground />
      
      <div className="relative z-10 min-h-screen px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer crafting digital experiences that matter
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-neon-blue mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer with over 3 years of experience 
                    creating innovative digital solutions. My journey began with curiosity 
                    about how things work on the web, and it has evolved into a deep love 
                    for crafting exceptional user experiences.
                  </p>
                  <p>
                    I specialize in modern web technologies, with expertise spanning from 
                    responsive frontend interfaces to scalable backend architectures. 
                    I believe in writing clean, maintainable code and following best 
                    practices to deliver robust solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open-source projects, or sharing knowledge with 
                    the developer community.
                  </p>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="cyber-card p-8">
                <h3 className="text-xl font-bold text-neon-purple mb-6">Skills & Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-${skill.color}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          className={`h-2 rounded-full bg-${skill.color} glow-pulse`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-neon-cyan mb-8">What Drives Me</h3>
              <div className="grid gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="cyber-card p-6 hover:scale-105 transition-transform"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <interest.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{interest.title}</h4>
                        <p className="text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Education & Certifications */}
              <div className="cyber-card p-8 mt-8">
                <h3 className="text-xl font-bold text-neon-pink mb-6">Education & Certifications</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-neon-blue pl-4">
                    <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                    <p className="text-muted-foreground">University Name • 2020-2024</p>
                  </div>
                  <div className="border-l-2 border-neon-purple pl-4">
                    <h4 className="font-semibold">AWS Certified Developer</h4>
                    <p className="text-muted-foreground">Amazon Web Services • 2023</p>
                  </div>
                  <div className="border-l-2 border-neon-cyan pl-4">
                    <h4 className="font-semibold">React Professional Certificate</h4>
                    <p className="text-muted-foreground">Meta • 2022</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;