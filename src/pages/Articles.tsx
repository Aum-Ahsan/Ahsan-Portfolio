import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageTransition from '@/components/PageTransition';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Articles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large-scale React applications using TypeScript, advanced patterns, and best practices for maintainable code.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
      featured: true,
      tags: ["React", "TypeScript", "Architecture"]
    },
    {
      id: 2,
      title: "Mastering Async/Await in JavaScript",
      excerpt: "Deep dive into asynchronous JavaScript programming, handling promises, error management, and performance optimization techniques.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "JavaScript",
      featured: true,
      tags: ["JavaScript", "Async", "Performance"]
    }
  ];

  const allArticles = [
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Design"]
    },
    {
      id: 4,
      title: "Introduction to Docker for Developers",
      excerpt: "Getting started with containerization using Docker, from basics to deployment strategies.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Deployment"]
    },
    {
      id: 5,
      title: "State Management in React: Redux vs Context",
      excerpt: "Comparing different state management solutions and choosing the right one for your project.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      date: "February 12, 2024",
      readTime: "7 min read",
      category: "React",
      tags: ["React", "State Management", "Redux"]
    },
    {
      id: 6,
      title: "API Design Best Practices",
      excerpt: "Creating robust and scalable APIs with proper error handling, authentication, and documentation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      date: "February 5, 2024",
      readTime: "9 min read",
      category: "Backend",
      tags: ["API", "Backend", "Best Practices"]
    },
    {
      id: 7,
      title: "The Future of Web Development: Trends 2024",
      excerpt: "Exploring upcoming technologies and trends that will shape web development in 2024.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      date: "January 28, 2024",
      readTime: "6 min read",
      category: "Trends",
      tags: ["Trends", "Future", "Technology"]
    },
    {
      id: 8,
      title: "Optimizing React Performance",
      excerpt: "Advanced techniques for improving React application performance including memoization and code splitting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      date: "January 20, 2024",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Performance", "Optimization"]
    }
  ];

  const categories = ["All", "React", "JavaScript", "CSS", "Backend", "DevOps", "Trends"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);

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
              Featured Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: BookOpen, number: "25+", label: "Articles Published" },
              { icon: TrendingUp, number: "50K+", label: "Total Reads" },
              { icon: Star, number: "4.8", label: "Average Rating" },
              { icon: Clock, number: "6 min", label: "Avg Read Time" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="cyber-card p-6 text-center hover:scale-105 transition-transform"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-neon-blue mb-8 flex items-center">
              <Star className="mr-2 h-6 w-6" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="cyber-card overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-neon-purple line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="neon-border group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "neon-glow" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* All Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold text-neon-cyan mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="cyber-card overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/80 text-primary-foreground">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read Article
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="cyber-card p-8 text-center mt-16"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified about new articles and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground"
              />
              <Button className="neon-glow">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;