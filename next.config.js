"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <main className="bg-blue-50 text-gray-800">
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Image src="/oce-logo.jpg" alt="Oce Cuci Express" width={50} height={50} />
            <h1 className="font-bold text-xl text-blue-600">Oce Cuci Express</h1>
          </div>
          <a href="https://wa.me/6287838088082" target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
            Pesan Disini
          </a>
        </div>
      </header>

      <div className="h-20" />

      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="text-center py-20 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <h2 className="text-4xl font-bold mb-4">Laundry Cepat, Bersih & Wangi</h2>
        <p className="mb-6">Gratis Antar Jemput Maks. 3 KM</p>
        <p className="mt-4">Buka 08.00 – 20.00 | Berdiri Sejak 2024</p>
      </motion.section>

      <footer className="bg-blue-600 text-white py-10 text-center mt-20">
        <p>Cabang 1: Cimahpar, Kec. Bogor Utara, Kota Bogor</p>
        <p>WA: 0878-3808-8082</p>
        <p className="mt-4">Cabang 2: Jl. Babakan Indobaso, Cimahpar, Kota Bogor</p>
        <p>WA: 0819-1014-1717</p>
        <p className="mt-4">Customer Service: 0851-2931-6312</p>
        <p className="mt-4 text-sm">© 2024 Oce Cuci Express</p>
      </footer>
    </main>
  );
}
