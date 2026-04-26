import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full max-w-4xl px-6 py-12 md:py-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Tentang Saya</h1>
        <div className="text-lg opacity-80 leading-relaxed max-w-2xl mx-auto space-y-4">
          <p>Saya Lahir di Bukittinggi, September 2003.</p>
          <p>
            Saya adalah Lulusan S1 Teknik Informatika dari <a href="https://uin-suska.ac.id" className="underline hover:text-white font-bold transition-colors">Universitas Islam Negeri Sultan Syarif Kasim Riau</a>
          </p>
          <p>Cita" saya adalah suatu saat nanti pengen jadi Profesional <i className="opacity-100 font-bold">Front-End Web Developer</i> atau <i className="opacity-100 font-bold">Cyber Security</i>.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <Accordion variant="splitted" className="w-full px-0 gap-4" defaultExpandedKeys={["1"]}>
          <AccordionItem key="1" aria-label="Pendidikan" title={<span className="text-xl font-bold uppercase tracking-widest">Pendidikan</span>} className="bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-4 opacity-80 mb-4">
              <p><b>SDN 21 TALUAK IV SUKU</b> (Sekolah Dasar) <i className="text-sm opacity-70 block">2008-2015</i></p>
              <p><b>SMPN 2 BUKITTINGGI</b> (Sekolah Menengah Pertama) <i className="text-sm opacity-70 block">2015 - 2018</i></p>
              <p><b>SMAN 3 BUKITTINGGI - MIPA</b> (Sekolah Menengah Atas) <i className="text-sm opacity-70 block">2018 - 2021</i></p>
              <p><b>UNIVERSITAS ISLAM NEGERI SULTAN SYARIF KASIM RIAU - TEKNIK INFORMATIKA</b> (Universitas) <i className="text-sm opacity-70 block">2021 - 2026</i></p>
            </div>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Skills" title={<span className="text-xl font-bold uppercase tracking-widest">Skills</span>} className="bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4 opacity-80 mb-4">
              <p><b>HTML 5</b></p>
              <p><b>CSS</b></p>
              <p><b>Figma</b></p>
              <p><b>Boostrap CSS Framework</b></p>
              <p><b>Laravel</b></p>
              <p><b>Corel Draw</b></p>
              <p><b>Canva</b></p>
              <p><b>PHP Native</b></p>
              <p><b>React JS</b></p>
            </div>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Hobi" title={<span className="text-xl font-bold uppercase tracking-widest">Hobi</span>} className="bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4 opacity-80 mb-4">
              <p>Memasak</p>
              <p>Main Game</p>
              <p>Bikin Web</p>
              <p>Nonton Anime</p>
              <p>Menyanyi</p>
              <p>Main Badminton</p>
            </div>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
