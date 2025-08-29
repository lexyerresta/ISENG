"use client";

import { useState } from "react";
import Container from "./Container";
import { BRAND } from "@/data/site";
import { Star } from "lucide-react";

export default function Navbar() {
    const [bookmarked, setBookmarked] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/60 border-b border-white/10">
            <Container>
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setBookmarked(v => !v)}
                            aria-label="Bookmark toggle"
                            aria-pressed={bookmarked}
                            className="size-8 rounded-xl grid place-items-center bg-white/10 transition-colors hover:text-yellow-300"
                        >
                            <Star className={`size-4 ${bookmarked ? "text-yellow-400 fill-yellow-400" : "text-white"}`} />
                        </button>
                        <span className="text-lg font-semibold tracking-tight">{BRAND.name}</span>
                        <span className="ml-2 text-xs text-white/70 tracking-wide">{BRAND.tagline}</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
                        <a href="#fitur" className="hover:text-white">Fitur</a>
                        <a href="#showcase" className="hover:text-white">Showcase</a>
                        <a href="#harga" className="hover:text-white">Harga</a>
                        <a href="#faq" className="hover:text-white">FAQ</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a href="#start" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
                            Mulai
                        </a>
                    </div>
                </div>
            </Container>
        </header>
    );
}