import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const articles = [
  {
    title: "Как подготовиться к первому сеансу татуировки",
    category: "Советы",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/2ded937c-e208-443a-9e7d-ac7dd51c9786.jpg",
    href: "/blog/first-session",
  },
  {
    title: "Уход за тату: что делать в первые две недели",
    category: "Уход",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/5ad952e5-f51e-4c98-adca-d5789996d1f9.jpg",
    href: "/blog/aftercare",
  },
  {
    title: "Популярные стили 2025 года: что выбрать?",
    category: "Тренды",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/acf7e5a5-e8dc-4330-9749-bb10bac57a8c.jpg",
    href: "/blog/styles-2025",
  },
  {
    title: "История японской татуировки: от самураев до наших дней",
    category: "История",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/6a58efd0-deea-42d7-a645-31d237e44b51.jpg",
    href: "/blog/japanese-tattoo",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const navigate = useNavigate()

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Блог
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              onClick={(e) => {
                if (article.href !== "#") {
                  e.preventDefault()
                  navigate(article.href)
                }
              }}
              className="group flex items-center justify-between py-6 relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 100,
              }}
            >
              <img
                src={articles[hoveredIndex].image}
                alt={articles[hoveredIndex].title}
                className="w-full h-[180px] object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}