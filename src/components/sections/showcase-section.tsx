import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  {
    src: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/5ad952e5-f51e-4c98-adca-d5789996d1f9.jpg",
    label: "Black & Grey",
  },
  {
    src: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/6a58efd0-deea-42d7-a645-31d237e44b51.jpg",
    label: "Neo-Traditional",
  },
  {
    src: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/fb335ee8-f279-4920-8f60-59217048b604.jpg",
    label: "Fine Line",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наши работы
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((item, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-serif text-lg">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
