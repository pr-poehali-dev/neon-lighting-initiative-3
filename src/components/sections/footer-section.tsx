import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

const SITE_URL = "https://neon-lighting-initiative-3--preview.poehali.dev/"

const footerLinks = [
  { label: "Работы", href: "#" },
  { label: "Мастера", href: "#" },
  { label: "Цены", href: "#" },
  { label: "Запись", href: "#" },
]

export function FooterSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              INK.
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-foreground font-serif text-2xl mb-2">Запишитесь на сеанс</p>
            <p className="text-muted-foreground text-sm mb-3">Оставьте имя и номер — мы свяжемся с вами в течение часа.</p>
            <a href="tel:+79605536679" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors mb-6" data-clickable>
              +7 960 553-66-79
            </a>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Номер телефона"
                  className="flex-1 bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-foreground text-background p-3 rounded-lg hover:bg-foreground/90 transition-colors"
                  data-clickable
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm">2025 INK Tattoo Studio. Все права защищены.</p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-right hidden md:block">
              <p className="text-foreground text-sm font-medium">Сканируй и переходи</p>
              <p className="text-muted-foreground text-xs mt-0.5">на наш сайт</p>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <QRCodeSVG
                value={SITE_URL}
                size={80}
                bgColor="#ffffff"
                fgColor="#18181b"
                level="M"
              />
            </div>
          </motion.div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Конфиденциальность
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}