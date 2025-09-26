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
      title: "Frontend Development",
      icon: Code,
      color: "neon-blue",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 87 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "neon-purple",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 },
        { name: "REST APIs", level: 93 },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "neon-cyan",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS (Swift)", level: 70 },
        { name: "Android (Kotlin)", level: 72 },
        { name: "Expo", level: 88 },
        { name: "PWA", level: 90 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "neon-pink",
      skills: [
        { name: "AWS", level: 82 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Terraform", level: 70 },
        { name: "Nginx", level: 78 },
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "neon-blue",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Adobe XD", level: 82 },
        { name: "UI/UX Design", level: 85 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 75 },
        { name: "Design Systems", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "neon-purple",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Postman", level: 90 },
        { name: "Jira", level: 85 },
        { name: "Slack", level: 92 },
        { name: "Linux", level: 83 },
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, description: "Analytical thinking and creative solutions" },
    { name: "Team Leadership", icon: Settings, description: "Leading and mentoring development teams" },
    { name: "Communication", icon: Code, description: "Clear technical communication with stakeholders" },
    { name: "Security Mindset", icon: Shield, description: "Security-first development approach" },
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              My Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and capabilities
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
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-sm text-${category.color}`}>{skill.level}%</span>
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
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
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
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="cyber-card p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Experience Timeline
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: "2024 - Present",
                  title: "Senior Full Stack Developer",
                  company: "Tech Innovations Inc.",
                  description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies."
                },
                {
                  year: "2022 - 2024",
                  title: "Full Stack Developer",
                  company: "Digital Solutions Co.",
                  description: "Developed and maintained multiple web applications, improved performance by 40%, and mentored junior developers."
                },
                {
                  year: "2021 - 2022",
                  title: "Junior Frontend Developer",
                  company: "StartUp Hub",
                  description: "Built responsive user interfaces and collaborated closely with design and backend teams."
                }
              ].map((exp, index) => (
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