export const BRAND = {
    name: "ISENG",
    tagline: "Innovate, Share, Evolve, Next-Gen",
};

export const FEATURES = [
    { t: "Gradien + Glass", d: "Nuansa modern dengan glassmorphism tipis & border halus." },
    { t: "Animasi Halus", d: "Framer Motion cukup untuk sentuhan elegan tanpa lebay." },
    { t: "Akses Cepat", d: "Struktur bersih, gampang dipecah ke komponen." },
];

export const PRICING = [
    { name: "Hobby", price: "Gratis", list: ["1 proyek", "Komponen dasar", "Deploy manual"] },
    { name: "Pro", price: "$9/mo", list: ["Tak terbatas", "Tema custom", "CI/CD siap"], popular: true },
    { name: "Business", price: "Hubungi", list: ["SLA", "Prioritas", "Audit akses"] },
];

export const FAQS = [
    { q: "Cocok untuk backend dev?", a: "Iya. Struktur simpel dan mudah dipisah jadi komponen kecil." },
    { q: "Butuh shadcn/ui?", a: "Tidak wajib. Halaman ini murni Tailwind + ikon. Bisa ditambah kapan saja." },
    { q: "Dark/Light mode?", a: "Bisa ditambah menggunakan next-themes, opsional." },
    { q: "Bisa nambah chart?", a: "Bisa—pakai Recharts/Chart.js di bagian Showcase." },
];