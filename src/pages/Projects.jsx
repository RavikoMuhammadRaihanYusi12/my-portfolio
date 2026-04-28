import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Projects() {
  const dummyProjects = [
    {
      title: "Website Kelurahan Batu Teritip",
      desc: "Website Kelurahan Batu Teritip merupakan platform informasi digital terintegrasi yang menyajikan Profil Kelurahan sebagai identitas wilayah, dokumen Monografi untuk transparansi administrasi, serta data Statistik kependudukan yang akurat, sekaligus dilengkapi fitur Kontak langsung guna mempermudah akses pelayanan publik bagi masyarakat secara modern dan dinamis.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "https://website-kelurahanbatuteritip.vercel.app/"
    },
    {
      title: "Aplikasi Inventaris Perpustakaan UPT SMPN 10 TAPUNG Berbasis Website",
      desc: "Aplikasi inventaris perpustakaan berbasis website di UPT SMPN 10 Tapung merupakan sistem manajemen literasi digital yang dirancang untuk mengotomatisasi pendataan koleksi buku, proses peminjaman, dan pengembalian secara real-time, sehingga meningkatkan akurasi data serta efisiensi layanan administrasi perpustakaan sekolah bagi siswa dan tenaga pendidik.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "https://github.com/RavikoMuhammadRaihanYusi12/aplikasi-perpustakaan-berbasis-website"
    },
    {
      title: "MyPortfolio",
      desc: "Website portofolio interaktif dengan animasi framer-motion yang halus",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: ""
    },
    {
      title: "Graphic Designer - Instagram KKN BATU TERITIP",
      desc: "Graphic Designer Instagram KKN Batu Teritip berperan sebagai komunikator visual yang bertanggung jawab dalam merancang konten informatif dan estetik, mulai dari desain *feed* edukatif hingga dokumentasi kegiatan, guna membangun identitas digital kelurahan yang menarik sekaligus menyampaikan pesan program kerja KKN secara efektif kepada masyarakat luas.",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "https://www.instagram.com/kknbatuteritip_24"
    },
    {
      title: "Graphic Designer - Keysha Sports Apparel Pekanbaru",
      desc: "Graphic Designer Instagram Keysha Sports Apparel Pekanbaru bertanggung jawab menciptakan identitas visual yang energik dan profesional melalui desain konten promosi produk pakaian olahraga, mulai dari katalog jersey hingga pengumuman promo, yang dikemas secara modern untuk meningkatkan daya tarik brand serta membangun keterlibatan konsumen di pasar olahraga wilayah Pekanbaru.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "https://www.instagram.com/keysha.sports"
    },
    {
      title: "Aplikasi Pemesanan Depot Air Minum Galon",
      desc: "Aplikasi Pemesanan Depot Air Minum Galon merupakan solusi digital berbasis website yang dirancang untuk menyederhanakan proses transaksi antara pelanggan dan penyedia jasa melalui fitur pemesanan praktis, pelacakan status pengiriman secara *real-time*, dan manajemen inventaris stok galon yang terorganisir, sehingga meningkatkan efisiensi operasional depot serta memberikan kenyamanan layanan kebutuhan air minum bagi masyarakat.",
      img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "https://github.com/RavikoMuhammadRaihanYusi12/aplikasi-pemesanan-depotairgalon-viowater2"
    },
    {
      title: "UI/UX Designer",
      desc: "Perancangan antarmuka pengguna (UI) dan pengalaman pengguna (UX) yang modern, interaktif, dan intuitif.",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "https://www.figma.com/design/wOvwCNgnNoWzonK7ByX3hm/Raviko-Muhammad-s-UI-UX-Portfolio?m=auto&t=cqEmHvZM9MZGtJ9U-6"
    }
  ];

  return (
    <div className="w-full max-w-5xl px-6 py-12 md:py-24 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Projects</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Berikut adalah beberapa project yang pernah saya kerjakan.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {dummyProjects.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
            className="w-full h-full"
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col hover:bg-white/10 transition-colors h-full" shadow="none">
              <div className="w-full h-48 overflow-hidden bg-white/5 rounded-t-xl relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 z-0"
                  radius="none"
                  removeWrapper
                />
              </div>
              <CardBody className="p-6 flex flex-col flex-grow text-left">
                <h5 className="font-bold text-xl uppercase tracking-widest mb-3">{item.title}</h5>
                <p className="text-sm opacity-70 mb-6 flex-grow leading-relaxed">{item.desc}</p>
                <Button as="a" href={item.link} target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black font-bold uppercase tracking-widest" radius="none">
                  Lihat Project
                </Button>
              </CardBody>

            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
