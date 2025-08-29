import Container from "@/components/shared/Container";
import { PRICING } from "@/data/site";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="harga" className="py-24">
            <Container>
                <div className="md:text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold">Paket</h2>
                    <p className="text-white/70 mt-3 max-w-2xl md:mx-auto">Dari gratis sampai bisnis. Pilih sesuai kebutuhan.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {PRICING.map(p => (
                        <div key={p.name} className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${p.popular ? "ring-1 ring-cyan-400/40" : ""}`}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-white/90 font-semibold">{p.name}</h3>
                                {p.popular && <span className="text-xs rounded-full bg-cyan-400 text-black px-2 py-0.5">Populer</span>}
                            </div>
                            <div className="text-3xl font-semibold mt-2">{p.price}</div>
                            <ul className="mt-4 space-y-2 text-sm text-white/80">
                                {p.list.map(x => (
                                    <li key={x} className="flex items-center gap-2"><Check className="size-4" />{x}</li>
                                ))}
                            </ul>
                            <button className="w-full mt-6 rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/85">Pilih</button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}