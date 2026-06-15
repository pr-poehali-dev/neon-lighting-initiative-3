import { motion } from "framer-motion"

const masters = [
  {
    name: "Артём Волков",
    role: "Black & Grey / Реализм",
    experience: "8 лет",
    bio: "Специализируется на портретах и детальных работах в чёрно-серой технике. Каждая работа — это история, рассказанная через тень и свет.",
    tags: ["Портреты", "Реализм", "Black & Grey"],
    emoji: "🖤",
  },
  {
    name: "Диана Борисова",
    role: "Fine Line / Минимализм",
    experience: "5 лет",
    bio: "Мастер тонких линий и деликатных работ. Создаёт изящные татуировки, которые выглядят как нарисованные вручную эскизы.",
    tags: ["Fine Line", "Минимализм", "Ботаника"],
    emoji: "🌿",
  },
  {
    name: "Кирилл Назаров",
    role: "Japanese / Neo-Traditional",
    experience: "10 лет",
    bio: "Прошёл стажировку в Токио. Мастерски владеет японской традицией иредзуми — от карпов кои до масок они.",
    tags: ["Japanese", "Irezumi", "Neo-Traditional"],
    emoji: "🐉",
  },
  {
    name: "Соня Крылова",
    role: "Geometric / Ornamental",
    experience: "6 лет",
    bio: "Работает с точными геометрическими формами и орнаментальными паттернами. Находит красоту в математической точности.",
    tags: ["Geometric", "Ornamental", "Dotwork"],
    emoji: "◈",
  },
]

export function MastersSection() {
  return (
    <section id="masters" className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Команда
            </motion.p>
            <motion.h2
              className="font-serif text-4xl md:text-6xl text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Наши мастера
            </motion.h2>
          </div>
          <motion.a
            href="tel:+79605536679"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm self-start md:self-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            data-clickable
          >
            Записаться → +7 960 553-66-79
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {masters.map((master, i) => (
            <motion.div
              key={i}
              className="group bg-secondary rounded-2xl p-8 flex flex-col gap-6 hover:bg-secondary/80 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-clickable
            >
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center text-3xl">
                  {master.emoji}
                </div>
                <span className="text-muted-foreground text-sm bg-background px-3 py-1 rounded-full">
                  {master.experience}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">{master.name}</h3>
                <p className="text-primary text-sm mt-1">{master.role}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{master.bio}</p>

              <div className="flex flex-wrap gap-2">
                {master.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="tel:+79605536679"
                className="text-sm text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 mt-auto"
                data-clickable
              >
                Записаться к {master.name.split(" ")[0]}
                <span className="text-muted-foreground font-normal">+7 960 553-66-79</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
