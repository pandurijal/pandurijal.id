import React, { useState } from "react";
import {
  Github,
  Twitter,
  Mail,
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";

const BlogHomepage = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Budi Developer</h1>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Tentang
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Proyek
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frontend Developer & Penulis Teknis
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Saya menulis tentang TypeScript, React, dan pengembangan web
              modern. Saat ini sedang membangun produk keren di TechCorp
              Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Berlangganan Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Dapatkan artikel dan wawasan terbaru langsung di inbox Anda. Tanpa
              spam.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Berlangganan
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
            {status === "success" && (
              <p className="mt-4 text-green-600">
                Terima kasih telah berlangganan!
              </p>
            )}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Artikel Terbaru
          </h3>
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <time>{post.date}</time>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
                    >
                      Baca selengkapnya
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogHomepage;
