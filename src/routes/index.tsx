import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  FileText,
  Megaphone,
  Target,
  MapPin,
  Mail,
  Globe,
  Share2,
  AtSign,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import newsTaman from "@/assets/news-taman.jpg";
import newsRapat from "@/assets/news-rapat.jpg";
import newsTani from "@/assets/news-tani.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SADESA — Digitalisasi Pelayanan Publik Desa" },
      {
        name: "description",
        content:
          "SADESA adalah portal informasi dan layanan mandiri warga desa: persuratan, aduan, dan tracking status pengajuan secara real-time.",
      },
      { property: "og:title", content: "SADESA — Digitalisasi Pelayanan Publik Desa" },
      {
        property: "og:description",
        content:
          "Tata kelola desa yang transparan, efektif, dan akuntabel dalam genggaman warga.",
      },
    ],
  }),
  component: Landing,
});

const news = [
  {
    img: newsTaman,
    category: "PEMBANGUNAN",
    title: "Peresmian Taman Literasi Desa Sukamaju",
    meta: "2 jam yang lalu • Oleh Admin Desa",
  },
  {
    img: newsRapat,
    category: "KEGIATAN",
    title: "Rapat Koordinasi Peringatan Kemerdekaan",
    meta: "5 jam yang lalu • Oleh Sekretaris Desa",
  },
  {
    img: newsTani,
    category: "PERTANIAN",
    title: "Pelatihan Pertanian Organik untuk Kelompok Tani",
    meta: "1 hari yang lalu • Oleh Penyuluh Desa",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
        <Landmark className="h-5 w-5" />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-primary">
        SADESA
      </span>
    </div>
  );
}

function Landing() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Mohon lengkapi nama dan pesan Anda.");
      return;
    }
    toast.success("Terima kasih! Pesan Anda telah terkirim.");
    setName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="flex items-center gap-2">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Login
            </Button>
            <Button className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90">
              Daftar
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Sistem Informasi Desa
              </p>
              <h1 className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-slate-200">
                Digitalisasi
                <br />
                Pelayanan Publik
                <br />
                Terpadu.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                SADESA merupakan portal informasi dan layanan mandiri warga yang
                dirancang untuk mewujudkan tata kelola desa yang transparan,
                efektif, dan akuntabel.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
                >
                  Mulai Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/30 bg-transparent text-primary hover:bg-primary/5"
                >
                  Pelajari Layanan
                </Button>
              </div>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-2 gap-4 self-center">
              <ServiceCard
                large
                icon={<FileText className="h-5 w-5" />}
                title="Persuratan Mandiri"
                desc="Ajukan berbagai jenis surat keterangan langsung dari smartphone Anda tanpa perlu antre."
                tone="muted"
              />
              <ServiceCard
                icon={<Megaphone className="h-5 w-5" />}
                title="Aduan Warga"
                desc="Lapor kendala fasilitas desa secara cepat."
                tone="muted"
              />
              <ServiceCard
                icon={<Target className="h-5 w-5" />}
                title="Tracking Status"
                desc="Pantau proses pengajuan Anda secara real-time."
                tone="warm"
              />
            </div>
          </div>
        </section>

        {/* Kabar Desa */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Kabar Desa
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {news.map((n) => (
              <article
                key={n.title}
                className="w-[78%] flex-shrink-0 snap-start md:w-auto"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={n.img}
                    alt={n.title}
                    width={800}
                    height={512}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <Badge className="absolute bottom-3 left-3 rounded-md bg-foreground/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-background hover:bg-foreground/85">
                    {n.category}
                  </Badge>
                </div>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground">
                  {n.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{n.meta}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Buku Tamu */}
        <section className="mx-auto max-w-3xl px-5 pb-20">
          <div
            className="rounded-3xl border border-border/60 bg-card p-7 sm:p-9"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              Buku Tamu
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tinggalkan pesan atau sapaan untuk pemerintahan desa kami.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="h-12 rounded-full border-transparent bg-muted px-5 text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Pesan
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan pesan Anda..."
                  rows={4}
                  className="rounded-2xl border-transparent bg-muted px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary"
                />
              </div>
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Portal resmi pelayanan digital dan pusat informasi masyarakat
                desa. Menuju Desa Mandiri dan Digital.
              </p>
            </div>

            <div className="space-y-5 md:col-span-2 md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
              <FooterContact
                icon={<MapPin className="h-4 w-4" />}
                title="Kantor Desa"
                lines={["Jl. Raya Pusat No. 123, Kabupaten Maju Jaya, Indonesia"]}
              />
              <FooterContact
                icon={<Mail className="h-4 w-4" />}
                title="Email"
                lines={["info@sadesa.go.id"]}
              />
            </div>
          </div>

          <div className="mt-10 border-t border-border/60 pt-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-5 text-muted-foreground">
                <a href="#" aria-label="Website" className="hover:text-primary">
                  <Globe className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Bagikan" className="hover:text-primary">
                  <Share2 className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Email" className="hover:text-primary">
                  <AtSign className="h-4 w-4" />
                </a>
              </div>
              <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
                © 2024 SADESA DIGITAL ARCHITECTURE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  large = false,
  tone = "muted",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  large?: boolean;
  tone?: "muted" | "warm";
}) {
  const toneClasses =
    tone === "warm"
      ? "bg-accent-warm text-accent-warm-foreground"
      : "bg-muted text-foreground";
  const iconBg =
    tone === "warm"
      ? "bg-accent-warm-foreground/10 text-accent-warm-foreground"
      : "bg-primary/10 text-primary";
  return (
    <div
      className={`flex flex-col rounded-2xl p-5 ${toneClasses} ${
        large ? "col-span-2 min-h-[180px]" : "min-h-[160px]"
      }`}
    >
      <span className={`grid h-10 w-10 place-items-center rounded-xl ${iconBg}`}>
        {icon}
      </span>
      <div className="mt-auto pt-6">
        <h3 className="font-display text-base font-bold leading-tight">
          {title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed opacity-80">{desc}</p>
      </div>
    </div>
  );
}

function FooterContact({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground">
          {title}
        </p>
        {lines.map((l) => (
          <p key={l} className="mt-1 text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}