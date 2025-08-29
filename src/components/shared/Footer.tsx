import Container from "./Container";
import { BRAND } from "@/data/site";

export default function Footer() {
    return (
        <footer className="py-10 border-t border-white/10">
            <Container>
                <div className="text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a className="hover:text-white" href="#">Docs</a>
                        <a className="hover:text-white" href="#">Komponen</a>
                        <a className="hover:text-white" href="#">Privasi</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}