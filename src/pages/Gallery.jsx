import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const images = ["/kon1.jpg", "/kon2.jpg", "/kon3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-4xl px-6 py-12 md:py-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Gallery Saya!</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full mb-16 relative group"
      >
        <div className="aspect-video w-full overflow-hidden border border-white/10 relative flex items-center justify-center bg-white/5">
          <Image
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            radius="none"
          />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/20 hover:bg-white hover:text-black z-10 cursor-pointer">
            &#8592;
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/20 hover:bg-white hover:text-black z-10 cursor-pointer">
            &#8594;
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={`w-16 h-1 bg-white transition-opacity cursor-pointer ${i === currentIndex ? 'opacity-100' : 'opacity-20'}`} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col hover:bg-white/10 transition-colors" shadow="none">
          <CardBody className="text-center p-8">
            <h5 className="font-bold text-xl uppercase tracking-widest mb-4">Notes :</h5>
            <p className="text-sm opacity-70 mb-8 leading-relaxed">
              Kalau anda mau kepo lebih dalam isi gallery saya , tinggal follow ig saya aja , link ada dibawah, <b className="opacity-100">cus follow!</b>
            </p>
            <Button as="a" href="https://instagram.com/ravikomuhammad" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black font-bold uppercase tracking-widest" radius="none">
              Follow!
            </Button>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
