"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { BRAND } from "@/data/site";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />
            </div>
            <Container>
                <div className="py-24 max-w-3xl">
                    <motion.div {...fadeUp}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
                            <Sparkles className="size-3" /> fresh and clean innovation
                        </span>

                        <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-tight">{BRAND.name}</h1>
                        <p className="mt-2 text-sm sm:text-base text-white/70">{BRAND.tagline}</p>

                        <p className="mt-6 text-lg text-white/80 max-w-2xl">
                            Landing page monolith Next.js yang simple, cepat, dan enak dipandang. Cocok buat backend developer
                            yang lagi gabut tapi pengen ngulik frontend.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="#start" className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300">
                                Buat Proyek <ArrowRight className="size-4" />
                            </a>
                            <a href="#fitur" className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-white/30 text-white hover:bg-white/10">
                                Lihat Fitur
                            </a>
                        </div>

                        <div className="mt-10 flex gap-6 text-sm text-white/70">
                            <div className="flex items-center gap-2"><Check className="size-4" />Desain rapi</div>
                            <div className="flex items-center gap-2"><Check className="size-4" />Responsif</div>
                            <div className="flex items-center gap-2"><Check className="size-4" />Siap produksi</div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}