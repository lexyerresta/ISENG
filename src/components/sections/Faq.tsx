import Container from "@/components/shared/Container";
import { FAQS } from "@/data/site";

export default function Faq() {
    return (
        <section id="faq" className="py-20">
            <Container>
                <div className="grid md:grid-cols-2 gap-6">
                    {FAQS.map(f => (
                        <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h4 className="text-white/90 font-semibold">{f.q}</h4>
                            <p className="mt-2 text-white/70 text-sm">{f.a}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}