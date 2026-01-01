"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface Certificate {
    title: string;
    organizer: string;
    year: string;
    skills: string;
    driveId?: string;
}

const certificates: Certificate[] = [
    {
        title: "Program Magang Kominfo Jawa Timur",
        organizer: "Dinas Komunikasi dan Informatika Provinsi Jawa Timur",
        year: "2025",
        skills: "IT, Information System, Professional Internship,typeScript,AdonisJS,PostgreSQL",
        driveId: "1W9wfhSikSeeTmqh5w_ZUoOJ3wyV4126N",
    },
    {
        title: "Magang Mandiri Seal",
        organizer: "Sosial Economic Acceleration Lab (SEAL)",
        year: "2025",
        skills: "Adonis JS, PostgreSQL, TypeScript,RAG(Retrieval Augmented Generation),API Integration",
        driveId: "1moSU8YX-75nlhbYjeIduYsnwQfppbzrm",
    },
    {
        title: "Financial Literacy 101",
        organizer: "Dicoding Indonesia",
        year: "2025",
        skills: "Financial Literacy, Digital Certification",
        driveId: "1oOYwQ3e4-ngcF14FhjOesEfCBd_kbLc8",
    },
    {
        title: "IQACS untuk Greenhouse Kopi Nursery",
        organizer: "Program Merdeka Belajar Kampus Merdeka",
        year: "2024",
        skills: "AI Engineer, IoT Integration, Web Development",
        driveId: "1-iWvRAQy-rX0SDVretBGAxX89GGmvDzz",
    },
    {
        title: "Peserta MBKM JTI Innovation Batch 1",
        organizer: "Merdeka Belajar Kampus Merdeka",
        year: "2023 - 2024",
        skills: "Full Stack Web Development",
        driveId: "1eqjwDMwf6KUJQ_bgYjBVVFOFmXndP5kF",
    }, {
        title: "Peserta MBKM JTI Innovation Batch 2",
        organizer: "Merdeka Belajar Kampus Merdeka",
        year: "2024",
        skills: "Full Stack Web Development",
        driveId: "1rf6OEwmg7oTgZMXgfo3FC1InxBGD8lmv",
    },

    {
        title: "SNAV & OAV Developer System",
        organizer: "Politeknik Negeri Jember",
        year: "2024",
        skills: "Full Stack Development, laravel, Bootstrap, MySQL, PHP, Git",
        driveId: "1SLmwjnoYIIAWWE3QVNSworcfpC8nUtkS",
    },

];


export function CertificateSection() {
    const [preview, setPreview] = useState<Certificate | null>(null);

    const getPreviewUrl = (id?: string) =>
        id ? `https://drive.google.com/file/d/${id}/preview` : "";

    return (
        <section id="certificates" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6 relative z-10">

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold mb-14">
                    My <span className="gradient-text">Certificates</span>
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.2)" }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-2xl border cursor-pointer"
                        >
                            <div className="flex justify-between">
                                <h3 className="text-xl font-semibold">{cert.title}</h3>
                                <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                                    {cert.year}
                                </span>
                            </div>

                            <p className="text-sm text-muted-foreground mt-2">
                                {cert.organizer}
                            </p>

                            <p className="mt-3 text-sm">
                                <span className="text-primary font-medium">Skills:</span>{" "}
                                {cert.skills}
                            </p>

                            {cert.driveId && (
                                <button
                                    onClick={() => setPreview(cert)}
                                    className="mt-5 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition"
                                >
                                    Preview
                                </button>
                            )}
                        </motion.div>
                    ))}

                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {preview && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPreview(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.85 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-background rounded-2xl shadow-xl w-full max-w-5xl h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setPreview(null)}
                                className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full shadow-lg"
                            >
                                <X />
                            </button>

                            {/* Google Drive PDF */}
                            <iframe
                                src={getPreviewUrl(preview.driveId)}
                                className="w-full h-full rounded-2xl"
                                allow="autoplay"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
