import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Settings,
  Brain,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Core",
      icon: Code,
      color: "neon-blue",
      skills: [
        { name: "Java", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "C#", level: 85 },
        { name: "Python", level: 82 },
        { name: "C / C++", level: 80 },
        { name: "OOP & DSA", level: 88 },
      ]
    },
    {
      title: "Web Development",
      icon: Database,
      color: "neon-purple",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "HTML / CSS", level: 95 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Desktop Development",
      icon: Smartphone,
      color: "neon-cyan",
      skills: [
        { name: "C# .NET", level: 88 },
        { name: "Windows Forms", level: 85 },
        { name: "Java Swing", level: 87 },
        { name: "MySQL", level: 90 },
        { name: "OpenCV", level: 75 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      color: "neon-pink",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Eclipse / NetBeans", level: 88 },
        { name: "Postman", level: 90 },
        { name: "Linux", level: 80 },
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, description: "Analytical thinking and creative solutions" },
    { name: "Teamwork", icon: Settings, description: "Collaborating effectively in group projects" },
    { name: "Communication", icon: Code, description: "Clear technical and non-technical communication" },
    { name: "Adaptability", icon: Shield, description: "Quick learning and adjusting to challenges" },
  ];

  const timeline = [
    {
      year: "2023 – Present",
      title: "Undergraduate (BICT Hons)",
      company: "University of Jaffna (Vavuniya Campus)",
      description: "Pursuing BICT (Hons) with focus on Software Engineering, Web & Desktop Applications."
    },
    {
      year: "2025",
      title: "Member",
      company: "AIESEC & IEEE Student Branch",
      description: "Active participation in leadership and technology communities."
    },
    {
      year: "Jan 2025",
      title: "Leadership Training Program",
      company: "Career Guidance Unit & Vision Global Empowerment",
      description: "Completed leadership & personal development training."
    },
    {
      year: "May 2025",
      title: "Ultimate API Workshop",
      company: "University of Vavuniya",
      description: "Hands-on training on Postman & API Testing."
    },
    {
      year: "2025",
      title: "Oratosphere Award",
      company: "Gavel Club, UoV",
      description: "Recognized for excellence in public speaking & communication."
    },
    {
      year: "2024/2025",
      title: "Member",
      company: "University Muslim Majlis / Helping Hands Project",
      description: "Engaged in community service and social activities."
    }
  ];

  return (
    <PageTransition className="hero-gradient relative overflow-hidden pt-20">
      <ParticlesBackground />
      
      <div className="relative z-10 min-h-screen px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              <span className="gradient-text">My Skills</span>
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
              A comprehensive overview of my technical expertise and extracurricular journey
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="cyber-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20 mr-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground drop-shadow-lg">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className={`text-sm text-${category.color} font-bold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 
                          }}
                          className={`h-2 rounded-full bg-${category.color} shadow-sm`}
                          style={{
                            boxShadow: `0 0 10px hsl(var(--${category.color}) / 0.5)`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text drop-shadow-lg">
              Soft Skills & Qualities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  className="cyber-card p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-4">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/20">
                      <skill.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground drop-shadow-lg">{skill.name}</h3>
                  <p className="text-foreground/80 text-sm font-medium">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic & Activities Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="cyber-card p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text drop-shadow-lg">
              Academic & Activities Timeline
            </h2>
            <div className="space-y-8">
              {timeline.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 shadow-glow" />
                  <div className="flex-1 border-l-2 border-primary/30 pl-6 pb-8">
                    <div className="bg-card/50 p-4 rounded-lg border border-border">
                      <div className="text-sm text-primary font-medium mb-1">{exp.year}</div>
                      <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                      <div className="text-neon-purple font-medium mb-2">{exp.company}</div>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
