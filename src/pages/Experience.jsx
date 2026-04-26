import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Design Jersey",
      desc: "Saya telah mendesain 3 baju jersey E-Sport profesional untuk tim terkemuka, yaitu ONIC Esports, Team Liquid, dan Alter Ego.",
      img: "/jersey_design_1777217104033.png"
    },
    {
      title: "Graphic Designer",
      desc: "Berpengalaman sebagai desainer grafis yang bertanggung jawab mendesain konten iklan jersey, konten kegiatan KKN, dan berbagai materi promosi lainnya yang kreatif dan modern.",
      img: "/graphic_designer_1777217120870.png"
    },
    {
      title: "Data Entry Associate",
      desc: "Memiliki pengalaman sebagai Data Entry Associate yang bertugas secara teliti menginput data publikasi dosen Teknik Informatika di UIN Suska Riau.",
      img: "/data_entry_1777217139294.png"
    },
    {
      title: "Website Developer",
      desc: "Berpengalaman membuat berbagai project pengembangan website, seperti aplikasi pemesanan tiket berbasis Laravel, aplikasi pemesanan depot air galon, serta membuat aplikasi inventaris perpustakaan.",
      img: "/web_developer_1777217154708.png"
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Pengalaman</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Berikut adalah beberapa bidang pekerjaan dan pengalaman yang saya miliki.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
            className="w-full h-full"
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col hover:bg-white/10 transition-colors h-full" shadow="none">
              <div className="w-full h-64 overflow-hidden bg-white/5 rounded-t-xl relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 z-0"
                  radius="none"
                  removeWrapper
                />
              </div>
              <CardBody className="p-8 flex flex-col flex-grow text-left">
                <h5 className="font-bold text-2xl uppercase tracking-widest mb-4">{item.title}</h5>
                <p className="text-base opacity-70 flex-grow leading-relaxed">{item.desc}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
