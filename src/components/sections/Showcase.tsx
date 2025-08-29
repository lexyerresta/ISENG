// src/components/sections/Showcase.tsx
import Container from "@/components/shared/Container";
import SubscribeForm from "./SubscribeForm";
import { revalidatePath } from "next/cache";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

async function subscribe(formData: FormData) {
    "use server";
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) return { ok: false, message: "Email tidak valid." };

    // TODO: kirim ke DB/API kamu di sini.
    // await fetch(process.env.NEWSLETTER_URL!, { ... });

    revalidatePath("/");
    return { ok: true, message: "Berhasil langganan." };
}

// dummy data
const data = [
    { name: "Sen", uv: 400 },
    { name: "Sel", uv: 300 },
    { name: "Rab", uv: 200 },
    { name: "Kam", uv: 278 },
    { name: "Jum", uv: 189 },
    { name: "Sab", uv: 239 },
    { name: "Min", uv: 349 },
];

export default function Showcase() {
    return (
        <section id="showcase" className="py-8">
            <Container>
                <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                    {/* KIRI: Preview Komponen */}
                    <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-white/90 text-lg font-semibold">Preview Komponen</h3>
                        <div className="mt-4 aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                    <XAxis dataKey="name" stroke="#aaa" />
                                    <YAxis stroke="#aaa" />
                                    <Tooltip contentStyle={{ background: "#111", border: "none" }} />
                                    <Line type="monotone" dataKey="uv" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* KANAN: Newsletter */}
                    <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-white/90 text-lg font-semibold">Newsletter</h3>
                        <p className="text-white/70 mt-2">Dapatkan tips singkat UI setiap minggu.</p>

                        {/* Client island */}
                        <SubscribeForm action={subscribe} />

                        <p className="text-xs text-white/50 mt-3">Kami tidak akan spam. Unsubscribe kapan saja.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}