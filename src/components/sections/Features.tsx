import Container from "@/components/shared/Container";
import { FEATURES } from "@/data/site";

export default function Features() {
    return (
        <section id="fitur" className="py-20">
            <Container>
                <div className="grid md:grid-cols-3 gap-6">
                    {FEATURES.map(f => (
                        <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
                            <h3 className="text-lg font-semibold text-white/90">{f.t}</h3>
                            <p className="mt-2 text-sm text-white/70">{f.d}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}