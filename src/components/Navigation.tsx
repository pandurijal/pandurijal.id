"use client";
export default function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">
            pandurijal<span className="text-gray-500 font-medium">.id</span>
          </h1>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Tentang
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Proyek
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
