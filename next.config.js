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
        <a href="https://wa.me/6287838088082" target="_blank"
          className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Pesan Sekarang
        </a>
        <p className="mt-4">Buka 08.00 – 20.00 | Berdiri Sejak 2024</p>
      </motion.section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-600">Price List</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <ul className="space-y-3">
              <li>Cuci + Setrika — Rp 7.000/kg</li>
              <li>Setrika — Rp 5.000/kg</li>
              <li>Cuci Kering — Rp 6.000/kg</li>
              <li>Bedcover — Rp 20.000 – 30.000</li>
              <li>Sepatu — Rp 35.000</li>
              <li>Selimut — Rp 15.000</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-xl mb-2">Gratis Antar Jemput</h4>
            <p>Maksimal 3 KM dari lokasi cabang</p>
          </div>
        </div>
      </motion.section>

      <footer className="bg-blue-600 text-white py-10 text-center">
        <p>Cabang 1 WA: 0878-3808-8082</p>
        <p>Cabang 2 WA: 0819-1014-1717</p>
        <p>Customer Service: 0851-2931-6312</p>
        <p className="mt-4 text-sm">© 2024 Oce Cuci Express</p>
      </footer>

      <a href="https://wa.me/6287838088082" target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg">WA 1</a>

      <a href="https://wa.me/6281910141717" target="_blank"
        className="fixed bottom-20 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg">WA 2</a>

      <a href="https://www.google.com/maps/search/?api=1&query=Cimahpar+Bogor" target="_blank"
        className="fixed bottom-36 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg">Maps</a>
    </main>
  );
}
