import { motion } from "framer-motion"

export function NavbarSection() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <span className="font-serif text-xl text-foreground">INK.</span>

      <a
        href="tel:+79605536679"
        className="flex flex-col items-end group"
        data-clickable
      >
        <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
          +7 960 553-66-79
        </span>
        <span className="text-muted-foreground text-xs">Записаться</span>
      </a>
    </motion.header>
  )
}
