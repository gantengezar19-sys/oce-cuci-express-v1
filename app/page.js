import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md">
        <Image
          src="/oce-logo.jpg"
          alt="OCE Logo"
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full"
        />
        <h1 className="text-2xl font-bold mb-2">OCE Cuci Express</h1>
        <p className="text-gray-600">
          Laundry cepat, rapi, dan profesional untuk hotel, pesantren, dan umum.
        </p>
      </div>
    </main>
  );
}