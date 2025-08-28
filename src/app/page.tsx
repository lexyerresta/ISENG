"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check, Star } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[radial-gradient(65%_120%_at_50%_-20%,#0ea5e9_0%,#0b1220_45%,#0b1220_100%)] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-white/10 grid place-items-center">
              <Star className="size-4" aria-hidden />
            </div>
            <span className="text-lg font-semibold tracking-tight">ISENG</span>
            <span className="ml-2 text-xs text-white/70 tracking-wide">Innovate, Share, Evolve, Next-Gen</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#fitur" className="hover:text-white">Fitur</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#harga" className="hover:text-white">Harga</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#start" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Mulai</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
              <Sparkles className="size-3"/> fresh and clean innovation
            </span>
            <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-tight">ISENG</h1>
            <p className="mt-2 text-sm sm:text-base text-white/70">Innovate, Share, Evolve, Next-Gen</p>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Landing page monolith Next.js yang simple, cepat, dan enak dipandang. Cocok buat backend developer yang
              lagi gabut tapi pengen ngulik frontend.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#start" className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300">
                Buat Proyek <ArrowRight className="size-4"/>
              </a>
              <a href="#fitur" className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-white/30 text-white hover:bg-white/10">
                Lihat Fitur
              </a>
            </div>
            <div className="mt-10 flex gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><Check className="size-4"/>Desain rapi</div>
              <div className="flex items-center gap-2"><Check className="size-4"/>Responsif</div>
              <div className="flex items-center gap-2"><Check className="size-4"/>Siap produksi</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fitur" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Gradien + Glass", d: "Nuansa modern dengan glassmorphism tipis & border halus." },
              { t: "Animasi Halus", d: "Framer Motion cukup untuk sentuhan elegan tanpa lebay." },
              { t: "Akses Cepat", d: "Struktur bersih, gampang dipecah ke komponen." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
                <h3 className="text-lg font-semibold text-white/90">{f.t}</h3>
                <p className="mt-2 text-sm text-white/70">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white/90 text-lg font-semibold">Preview Komponen</h3>
              <div className="mt-4 aspect-video rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 grid place-items-center">
                <div className="text-center">
                  <p className="text-white/80">Letakkan cuplikan UI atau chart di sini</p>
                  <p className="text-white/50 text-sm">kartu statistik, tabel, dsb</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white/90 text-lg font-semibold">Newsletter</h3>
              <p className="text-white/70 mt-2">Dapatkan tips singkat UI setiap minggu.</p>
              <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
                <input type="email" placeholder="Email kamu" className="flex-1 rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 outline-none focus:border-white/40"/>
                <button className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/85">Langganan</button>
              </form>
              <p className="text-xs text-white/50 mt-3">Kami tidak akan spam. Unsubscribe kapan saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="harga" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold">Paket</h2>
            <p className="text-white/70 mt-3 max-w-2xl md:mx-auto">Dari gratis sampai bisnis. Pilih sesuai kebutuhan.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Hobby", price: "Gratis", list: ["1 proyek","Komponen dasar","Deploy manual"]},
              { name: "Pro", price: "$9/mo", list: ["Tak terbatas","Tema custom","CI/CD siap"], popular: true },
              { name: "Business", price: "Hubungi", list: ["SLA","Prioritas","Audit akses"]},
            ].map((p)=> (
              <div key={p.name} className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${p.popular ? "ring-1 ring-cyan-400/40" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-white/90 font-semibold">{p.name}</h3>
                  {p.popular && <span className="text-xs rounded-full bg-cyan-400 text-black px-2 py-0.5">Populer</span>}
                </div>
                <div className="text-3xl font-semibold mt-2">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.list.map((x)=> (<li key={x} className="flex items-center gap-2"><Check className="size-4"/>{x}</li>))}
                </ul>
                <button className="w-full mt-6 rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/85">Pilih</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {q: "Cocok untuk backend dev?", a: "Iya. Struktur simpel dan mudah dipisah jadi komponen kecil."},
              {q: "Butuh shadcn/ui?", a: "Tidak wajib. Halaman ini murni Tailwind + ikon. Bisa ditambah kapan saja."},
              {q: "Dark/Light mode?", a: "Bisa ditambah menggunakan next-themes, opsional."},
              {q: "Bisa nambah chart?", a: "Bisa—pakai Recharts/Chart.js di bagian Showcase."},
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-white/90 font-semibold">{f.q}</h4>
                <p className="mt-2 text-white/70 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">Siap mulai dengan ISENG?</h3>
            <p className="text-white/70 mt-3">Kembangkan ide cepat, polish pelan-pelan, dan pamerkan hasilnya.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#fitur" className="rounded-lg bg-cyan-400 text-black px-5 py-2.5 text-sm font-medium hover:bg-cyan-300">Jelajahi Fitur</a>
              <a href="#showcase" className="rounded-lg border border-white/30 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10">Lihat Showcase</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ISENG. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Docs</a>
            <a className="hover:text-white" href="#">Komponen</a>
            <a className="hover:text-white" href="#">Privasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
