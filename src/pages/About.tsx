import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { Code, Coffee, Zap, Heart, Settings, Cpu, Workflow, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Process Automation", level: 95, color: "neon-blue" },
    { name: "RPA Tools", level: 88, color: "neon-purple" },
    { name: "Workflow Design", level: 90, color: "neon-cyan" },
    { name: "System Integration", level: 85, color: "neon-pink" },
  ];

  const interests = [
    { icon: Settings, title: "Process Optimization", description: "Streamlining workflows for maximum efficiency" },
    { icon: Cpu, title: "Automation Tools", description: "Mastering RPA and automation platforms" },
    { icon: Workflow, title: "System Integration", description: "Connecting disparate systems seamlessly" },
    { icon: Target, title: "Quality Assurance", description: "Ensuring reliable and accurate automation" },
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
              Automation engineer passionate about optimizing processes and streamlining workflows
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
                    I'm a dedicated automation engineer with over 3 years of experience 
                    in process optimization and workflow automation. My journey began with 
                    a fascination for making repetitive tasks more efficient, and it has 
                    evolved into a passion for transforming business processes through 
                    intelligent automation solutions.
                  </p>
                  <p>
                    I specialize in Robotic Process Automation (RPA), workflow design, 
                    and system integration. My expertise spans across various automation 
                    platforms and tools, helping organizations reduce manual effort, 
                    minimize errors, and increase productivity through smart automation.
                  </p>
                  <p>
                    When I'm not designing automation solutions, you'll find me exploring 
                    new RPA tools, optimizing existing processes, or sharing knowledge 
                    about automation best practices with the community.
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
                    <h4 className="font-semibold">UiPath RPA Developer Certification</h4>
                    <p className="text-muted-foreground">UiPath • 2023</p>
                  </div>
                  <div className="border-l-2 border-neon-cyan pl-4">
                    <h4 className="font-semibold">Automation Anywhere Certified</h4>
                    <p className="text-muted-foreground">Automation Anywhere • 2022</p>
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