import { motion } from "framer-motion"

const carouselImages = [
  "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/5ad952e5-f51e-4c98-adca-d5789996d1f9.jpg",
  "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/acf7e5a5-e8dc-4330-9749-bb10bac57a8c.jpg",
  "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/fb335ee8-f279-4920-8f60-59217048b604.jpg",
  "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/2ded937c-e208-443a-9e7d-ac7dd51c9786.jpg",
  "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/6a58efd0-deea-42d7-a645-31d237e44b51.jpg",
  "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/ebad0987-5a46-4f55-84a7-3871c47bcb03.jpg",
]

export function CarouselSection() {
  const items = [...carouselImages, ...carouselImages]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Каждая работа — уникальна.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[360px] h-[380px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Работа ${(i % carouselImages.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
