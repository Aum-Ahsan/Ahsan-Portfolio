import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { Code, Coffee, Zap, Heart, Settings, Cpu, Workflow, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Java / OOP", level: 90, color: "neon-blue" },
    { name: "MERN Stack", level: 85, color: "neon-purple" },
    { name: "C# / .NET", level: 80, color: "neon-cyan" },
    { name: "SQL / MySQL", level: 88, color: "neon-pink" },
  ];

  const interests = [
    { icon: Code, title: "Problem Solving", description: "Enjoy tackling coding challenges and algorithms" },
    { icon: Zap, title: "Innovation", description: "Exploring new technologies & building creative projects" },
    { icon: Heart, title: "Collaboration", description: "Working with teams to build impactful solutions" },
    { icon: Coffee, title: "Continuous Learning", description: "Always eager to improve skills and knowledge" },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Motivated BICT (Hons) undergraduate & full-stack developer passionate about building web and desktop applications.
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
                    I'm Ahsan, a BICT (Hons) undergraduate at the University of Jaffna (Vavuniya Campus). 
                    Skilled in Java, JavaScript, C#, and MERN stack, I enjoy creating web and desktop applications that solve real-world problems.
                  </p>
                  <p>
                    My experience includes building an Attendance Management System with QR + Face Recognition and a Learning Management System with C# & MySQL.
                  </p>
                  <p>
                    Beyond coding, I actively contribute to student clubs like AIESEC, Gavel Club, and IEEE, which help me grow as a leader and communicator.
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

            {/* Right Column - Interests + Education */}
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
                    <h4 className="font-semibold">Bachelor of ICT (Hons)</h4>
                    <p className="text-muted-foreground">University of Jaffna, Vavuniya Campus • 2023-2026</p>
                  </div>
                  <div className="border-l-2 border-neon-purple pl-4">
                    <h4 className="font-semibold">Ultimate API Workshop – Postman & API Testing</h4>
                    <p className="text-muted-foreground">University of Vavuniya • May 2025</p>
                  </div>
                  <div className="border-l-2 border-neon-cyan pl-4">
                    <h4 className="font-semibold">Leadership Training Program</h4>
                    <p className="text-muted-foreground">Career Guidance Unit • Jan 2025</p>
                  </div>
                  <div className="border-l-2 border-neon-pink pl-4">
                    <h4 className="font-semibold">Oratosphere Award</h4>
                    <p className="text-muted-foreground">Public Speaking • Gavel Club • 2025</p>
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
