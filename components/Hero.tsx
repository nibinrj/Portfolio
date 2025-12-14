'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-500 font-medium mb-4 tracking-wide uppercase text-sm">
                            Backend Developer & Cloud Enthusiast
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
                            Building Scalable Backends & <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Cloud-Native Solutions
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Hi, I'm <span className="text-slate-100 font-semibold">Nibin Sellaraj</span>.
                            I build robust RESTful APIs and real-world backend systems, focusing on scalable,
                            secure, and high-performance development with Java, Spring Boot, and AWS.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a
                                href="#projects"
                                className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/resume.pdf"
                                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-medium transition-all flex items-center gap-2 border border-slate-700"
                            >
                                Download Resume
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
