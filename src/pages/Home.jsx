import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full max-w-4xl px-6 py-12 md:py-24 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/kon.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-white/10 shadow-2xl mb-6 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Perkenalkan</h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mb-8 leading-relaxed">
          Saya Raviko Muhammad Raihan Yusi bisa dipanggil viko, Cowo gabut yang pengen bikin web sendiri secara otodidak, saya adalah seorang mahasiswa UIN SUSKA RIAU kelahiran 2003, dan saya tertarik coba2 belajar bikin web sendiri ketika saya menginjak semester 4 dan juga setelah belajar di Channel YouTube bang Dea Afrizal.
        </p>
        <div className="overflow-hidden w-full max-w-md bg-white/5 rounded-full py-2 px-4 mb-16 border border-white/10">
          <marquee className="text-sm tracking-widest uppercase opacity-70">This is MyPortfolio Homepage , Enjoy!!</marquee>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[
          { title: "Tentang Saya", desc: "Kalau anda mau tau tentang saya , anda bisa cek disini", link: "/about", btn: "About!" },
          { title: "Experience", desc: "Kalau anda mau tau pengalaman kerja dan keahlian saya, anda bisa cek disini.", link: "/experience", btn: "Experience!" },
          { title: "Projects", desc: "Kalau anda mau liat project-project yang pernah saya buat, anda bisa cek disini.", link: "/projects", btn: "Projects!" },
          { title: "Kontak Saya", desc: "Kalau anda mau tau dimana aja anda bisa nge-contact saya , anda bisa cek disini.", link: "/contact", btn: "Kontak!" },
          { title: "Gallery", desc: "Kalau anda mau liat Gallery saya , anda bisa cek disini.", link: "/gallery", btn: "Gallery!" },
          { title: "Socmed", desc: "Kalau anda mau tau Socmed saya, anda bisa cek disini.", link: "/socmed", btn: "Socmed!" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl p-4 h-full flex flex-col hover:bg-white/10 transition-colors" shadow="none">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-sm opacity-70 mb-6 text-left flex-grow">{item.desc}</p>
                <Button as={Link} to={item.link} className="w-full bg-white text-black font-bold uppercase tracking-widest" radius="none">
                  {item.btn}
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
