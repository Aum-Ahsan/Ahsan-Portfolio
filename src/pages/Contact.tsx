import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Youtube,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahsanaum3@gmail.com",
      link: "mailto:ahsanaum3@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 757106255",
      link: "tel:+94757106255"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Batticaloa, Eastern Province, Sri Lanka",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Aum-Ahsan",
      color: "text-gray-400 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohamed-ahsan-85baa5269/",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@ahsanaum2680",
      color: "text-red-400 hover:text-red-300"
    }
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/",
      description: "Practice coding problems",
      badge: "Learning"
    },
    {
      name: "GitHub",
      url: "https://github.com/Aum-Ahsan",
      description: "Projects & repositories",
      badge: "Active"
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/",
      description: "Community contributions",
      badge: "Member"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-neon-blue mb-6">Send Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="neon-border"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="neon-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="neon-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="neon-border resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full neon-glow group">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-neon-purple mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.title}</div>
                        <div className="text-muted-foreground text-sm">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="cyber-card p-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:scale-105 group text-center"
                    >
                      <social.icon className={`h-8 w-8 mx-auto mb-2 ${social.color} transition-colors`} />
                      <div className="text-sm font-medium">{social.name}</div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Coding Profiles */}
              <div className="cyber-card p-8">
                <h3 className="text-xl font-bold text-neon-pink mb-6">Coding Profiles</h3>
                <div className="space-y-3">
                  {codingProfiles.map((profile, index) => (
                    <motion.a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-card/50 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-medium">{profile.name}</div>
                          <div className="text-xs text-muted-foreground">{profile.description}</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {profile.badge}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16 cyber-card p-12"
          >
            <h3 className="text-3xl font-bold mb-4 gradient-text">Ready to Start?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a clear vision or just a rough idea, I'm here to help bring your project to life. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neon-glow">
                <Mail className="mr-2 h-5 w-5" />
                Start a Project
              </Button>
              <Button size="lg" variant="outline" className="neon-border">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
