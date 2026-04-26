import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    { name: "Instagram", img: "/pngtree-instagram-icon-png-image_6315974.png", desc: "@ravikomuhammad", link: "http://instagram.com/ravikomuhammad", btn: "Follow!" },
    { name: "Whatsapp", img: "/whatsapp-logo-png-hd-2.png", desc: "Whatsapp Saya", link: "https://api.whatsapp.com/send/?phone=%2B6283171426232&text&type=phone_number&app_absent=0", btn: "Kontak Sekarang!" },
    { name: "Telegram", img: "/tele1.png", desc: "Telegram Saya.", link: "https://t.me/ravikomuhammad", btn: "Kontak Sekarang!" },
    { name: "Gmail", img: "/gmail.png", desc: "ravikomuhammad1212@gmail.com", link: "mailto:ravikomuhammad1212@gmail.com", btn: "Hubungi!" },
    { name: "Linkedin", img: "/600px-LinkedIn_logo_initials.png", desc: "Linkedin Saya.", link: "https://www.linkedin.com/in/ravikomuhammadraihanyusi", btn: "Let's Connect!" }
  ];

  return (
    <div className="w-full max-w-5xl px-6 py-12 md:py-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Kontak Saya!</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {contacts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
            className="w-full"
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col hover:bg-white/10 transition-colors h-full" shadow="none">
              <div className="p-8 flex justify-center items-center bg-white/5 rounded-t-xl h-48">
                <Image src={item.img} alt={item.name} className="object-contain w-24 h-24 drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <CardBody className="text-center p-6 flex flex-col flex-grow">
                <h5 className="font-bold text-xl uppercase tracking-widest mb-2">{item.name}</h5>
                <p className="text-sm opacity-70 mb-6 flex-grow">{item.desc}</p>
                <Button as="a" href={item.link} target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black font-bold uppercase tracking-widest" radius="none">
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
