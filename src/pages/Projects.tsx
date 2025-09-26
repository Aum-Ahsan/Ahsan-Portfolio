import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using OpenAI API. Built with Next.js and Socket.io.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=300&fit=crop",
      tech: ["Next.js", "OpenAI", "Socket.io", "Prisma"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Express", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Analytics Dashboard",
      description: "Interactive weather dashboard with data visualization and forecasting capabilities.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure voting application built on Ethereum blockchain with smart contracts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      tech: ["Solidity", "Web3.js", "React", "Truffle"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with social features and challenges.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      live: "#",
      featured: false,
    },
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
            
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
              A showcase of my work, from web applications to mobile solutions
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-neon-blue mb-8 flex items-center drop-shadow-lg">
              <Star className="mr-2 h-6 w-6" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="cyber-card overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-neon-purple drop-shadow-lg">{project.title}</h3>
                    <p className="text-foreground/80 mb-4 text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="neon-border">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="neon-glow">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-neon-cyan mb-8 drop-shadow-lg">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="cyber-card overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <Star className="h-4 w-4 text-neon-pink fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-foreground drop-shadow-lg">{project.title}</h3>
                    <p className="text-foreground/80 text-sm mb-3 line-clamp-2 font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16 py-16"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button size="lg" className="neon-glow">
              Let's Start a Project
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;