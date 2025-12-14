'use client';

import { motion } from 'framer-motion';
import { Server, Database, Cloud, Code, Terminal, Layers } from 'lucide-react';

const skillsData = [
    {
        category: 'Languages',
        icon: <Code className="w-6 h-6 text-blue-400" />,
        skills: ['Java (Core & Advanced)', 'SQL', 'Python'],
    },
    {
        category: 'Frameworks',
        icon: <Layers className="w-6 h-6 text-purple-400" />,
        skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate'],
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud className="w-6 h-6 text-cyan-400" />,
        skills: ['AWS (EC2, RDS, IAM, VPC)', 'Docker', 'Nginx', 'Git/GitHub'],
    },
    {
        category: 'Databases',
        icon: <Database className="w-6 h-6 text-green-400" />,
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
        category: 'Tools',
        icon: <Terminal className="w-6 h-6 text-orange-400" />,
        skills: ['Postman', 'Maven', 'JMeter'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-slate-900 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-200">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
