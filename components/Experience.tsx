'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8 border-l-2 border-slate-700"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                        <div className="mb-1 flex items-center gap-2 text-blue-400 font-medium">
                            <Briefcase size={16} />
                            <span>Backend Developer Intern</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-1">Profeena InfoTech</h3>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                            <Calendar size={14} />
                            <span>June 2025 - Present</span>
                        </div>
                        <p className="text-slate-400">
                            Engineered an end-to-end Food Ordering Module and designed database schemas for real-time synchronization between kitchen and room service.
                        </p>
                    </motion.div>

                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative pl-8 border-l-2 border-slate-700"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>
                        <div className="mb-1 flex items-center gap-2 text-purple-400 font-medium">
                            <Briefcase size={16} />
                            <span>B.E. Computer Science and Engineering</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-1">Dr. Mahalingam College of Engineering and Technology</h3>
                        <p className="text-slate-400 mt-2">
                            <strong className="text-slate-300">Certifications:</strong> AWS Cloud Practitioner Essentials, Nvidia Introduction to Networking.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
