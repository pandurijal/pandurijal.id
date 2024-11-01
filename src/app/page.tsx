import {
  Github,
  Twitter,
  Mail,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Newsletter from "@/components/Newsletter";

const posts = [
  {
    title: "Membangun Web Stack Modern dengan TypeScript",
    excerpt:
      "Mengeksplorasi manfaat TypeScript dalam pengembangan web modern dan bagaimana implementasinya dalam proyek nyata...",
    date: "15 Januari 2024",
    readTime: "5 menit baca",
    category: "TypeScript",
  },
  {
    title: "Masa Depan Frontend Development",
    excerpt:
      "Membahas tren dan teknologi terbaru dalam pengembangan frontend yang akan mengubah cara kita membangun aplikasi web...",
    date: "10 Januari 2024",
    readTime: "4 menit baca",
    category: "Frontend",
  },
  {
    title: "Menguasai State Management",
    excerpt:
      "Pembahasan mendalam tentang berbagai pendekatan manajemen state dalam aplikasi modern dan best practices...",
    date: "5 Januari 2024",
    readTime: "6 menit baca",
    category: "React",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4">
        <section className="py-20 border-b border-gray-200">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <span
                className="text-5xl block"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>
              <div className="space-y-2">
                <h2 className="text-5xl font-bold text-black tracking-tight">
                  Solutions Engineer
                  <br />& Problem Solver
                </h2>
                <p className="text-xl text-gray-600">
                  Building meaningful products with technology.
                </p>
              </div>
              <p className="text-base text-gray-500 max-w-lg">
                Saat ini sedang membangun produk-produk keren di PR Dev. <br />
                Mari berbagi cerita tentang pengembangan produk digital.
              </p>
              <div className="flex items-center space-x-5 pt-2">
                <a
                  href="https://prdev.io"
                  target="_blank"
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Lihat Portfolio
                </a>
                <div className="flex space-x-4 items-center">
                  <a
                    href="https://github.com/pandurijal"
                    target="_blank"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/pandurijal"
                    target="_blank"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:pandurijal96@gmail.com"
                    target="_blank"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />

        <section className="py-16">
          <h3 className="text-2xl font-bold text-black mb-12">
            Artikel Terbaru
          </h3>
          <div className="divide-y divide-gray-200">
            {posts.map((post, index) => (
              <article key={index} className="group py-12 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <time className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="font-medium text-gray-900">
                    {post.category}
                  </span>
                </div>

                <h4 className="text-3xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
                  <a href="#">{post.title}</a>
                </h4>

                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-black font-medium group-hover:text-gray-600 transition-colors"
                >
                  Baca selengkapnya
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
