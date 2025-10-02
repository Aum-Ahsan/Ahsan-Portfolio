import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePic from '@/assets/ahsan.png';

// Looping typing effect component
const LoopingTypingText = ({ phrases, speed = 80, deleteSpeed = 50, delay = 1200 }) => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timer;

        if (!deleting) {
            if (charIndex < currentPhrase.length) {
                timer = setTimeout(() => setCharIndex(charIndex + 1), speed);
                setText(currentPhrase.slice(0, charIndex + 1));
            } else {
                timer = setTimeout(() => setDeleting(true), delay);
            }
        } else {
            if (charIndex > 0) {
                timer = setTimeout(() => setCharIndex(charIndex - 1), deleteSpeed);
                setText(currentPhrase.slice(0, charIndex - 1));
            } else {
                setDeleting(false);
                setPhraseIndex((phraseIndex + 1) % phrases.length);
            }
        }

        return () => clearTimeout(timer);
    }, [charIndex, deleting, phraseIndex, phrases, speed, deleteSpeed, delay]);

    return (
        <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent font-bold">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

// Animated design elements
const AnimatedDesign = () => (
    <>
        <motion.div
            className="absolute top-1/4 left-0 w-24 h-24 bg-purple-500 rounded-sm opacity-40"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
            className="absolute bottom-1/4 right-0 w-0 h-0 border-l-16 border-r-16 border-b-24 border-l-transparent border-r-transparent border-b-pink-500 opacity-40"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
    </>
);

const Hero = () => {
    const navigate = useNavigate();

    return (
        <PageTransition className="hero-gradient relative overflow-hidden">
            <AnimatedDesign />

            <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-neon-cyan text-lg md:text-xl font-medium"
                            >
                                Hello, I'm
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight"
                            >
                                <span className="gradient-text">Ahsan</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-xl md:text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 font-light"
                            >
                                <LoopingTypingText
                                    phrases={["Software Engineer & Creative Coder", "I love programming"]}
                                    speed={80}
                                    deleteSpeed={50}
                                    delay={1200}
                                />
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                                className="text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-100"
                            >
                                <span className="text-blue-600 dark:text-cyan-400">I’m a software engineer</span>
                                <span className="text-purple-700 dark:text-pink-400"> and creative coder, </span>
                                <span className="text-cyan-700 dark:text-blue-300">
                                    passionate about crafting web and desktop applications.
                                </span>
                                <span className="text-gray-800 dark:text-gray-300">
                                    {" I love solving problems, exploring new technologies, and building innovative solutions that make a difference."}
                                </span>
                            </motion.p>
                        </motion.div>

                        {/* Right Column - Profile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-neon-blue shadow-2xl neon-glow">
                                <img
                                    src={profilePic}
                                    alt="Ahsan - Software Engineer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-start pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-start items-start"
                        >
                            <Button
                                size="lg"
                                className="neon-glow bg-primary text-primary-foreground hover:bg-primary-glow px-8 py-4 text-lg font-semibold group"
                                onClick={() => navigate('/contact')}
                            >
                                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                                Let's Connect
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-primary-foreground px-8 py-4 text-lg font-semibold group neon-border"
                                onClick={() => window.open('https://docs.google.com/document/d/10CLRFheuoR1-4-BFoDuRIDpaKi9TCXNxqMtCJtKeXDg/edit?usp=sharing', '_blank')}
                            >
                                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                View Resume
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.0 }}
                            className="mt-8"
                        >
                            <Button
                                size="lg"
                                className="neon-glow bg-secondary text-secondary-foreground hover:bg-secondary-glow px-8 py-4 text-lg font-semibold group"
                                onClick={() => navigate('/projects')}
                            >
                                Explore My Projects
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Hero;
