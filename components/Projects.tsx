'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Server } from 'lucide-react';

const projects = [
    {
        title: 'Cloud-Native Quiz Assessment Platform',
        description: 'Architected a secure, cloud-native backend using Spring Boot 3. Implemented a private network strategy with AWS VPC and stateless security using JWT/RBAC.',
        techStack: ['Java 23', 'Spring Boot 3', 'AWS', 'Docker', 'PostgreSQL'],
        github: 'https://github.com/nibinrj/quiz',
        featured: true,
    },
    {
        title: 'Library Management Backend',
        description: 'A RESTful API managing assets and patron data. Engineered a transactional borrowing system with robust CRUD operations using Spring Data JPA.',
        techStack: ['Java 24', 'Spring Boot 3.4.5', 'PostgreSQL', 'Spring Data JPA'],
        github: 'https://github.com/nibinrj/library-1',
        featured: false,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Showcasing backend architecture, cloud integrations, and secure API development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
                        >
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg">
                                        <Server className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-slate-900 text-slate-300 text-xs rounded border border-slate-700 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
