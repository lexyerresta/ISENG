import Container from "@/components/shared/Container";

export default function Cta() {
    return (
        <section id="start" className="py-20">
            <Container>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 text-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold">Siap mulai dengan ISENG?</h3>
                    <p className="text-white/70 mt-3">Kembangkan ide cepat, polish pelan-pelan, dan pamerkan hasilnya.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <a href="#fitur" className="rounded-lg bg-cyan-400 text-black px-5 py-2.5 text-sm font-medium hover:bg-cyan-300">Jelajahi Fitur</a>
                        <a href="#showcase" className="rounded-lg border border-white/30 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10">Lihat Showcase</a>
                    </div>
                </div>
            </Container>
        </section>
    );
}