import { motion } from "framer-motion"

const masters = [
  {
    name: "Артём Волков",
    role: "Black & Grey / Реализм",
    experience: "8 лет",
    bio: "Специализируется на портретах и детальных работах в чёрно-серой технике. Каждая работа — это история, рассказанная через тень и свет.",
    tags: ["Портреты", "Реализм", "Black & Grey"],
    photo: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/fb397b06-f82b-4efc-9f34-0003d80c3603.jpg",
  },
  {
    name: "Диана Борисова",
    role: "Fine Line / Минимализм",
    experience: "5 лет",
    bio: "Мастер тонких линий и деликатных работ. Создаёт изящные татуировки, которые выглядят как нарисованные вручную эскизы.",
    tags: ["Fine Line", "Минимализм", "Ботаника"],
    photo: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/0fb002e1-486d-480d-aeef-52e519b21c8d.jpg",
  },
  {
    name: "Кирилл Назаров",
    role: "Japanese / Neo-Traditional",
    experience: "10 лет",
    bio: "Прошёл стажировку в Токио. Мастерски владеет японской традицией иредзуми — от карпов кои до масок они.",
    tags: ["Japanese", "Irezumi", "Neo-Traditional"],
    photo: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/220c467c-15e5-4326-accf-6754c6063047.jpg",
  },
  {
    name: "Соня Крылова",
    role: "Geometric / Ornamental",
    experience: "6 лет",
    bio: "Работает с точными геометрическими формами и орнаментальными паттернами. Находит красоту в математической точности.",
    tags: ["Geometric", "Ornamental", "Dotwork"],
    photo: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/b676967a-11f5-4571-96e8-9268c998b630.jpg",
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
              <div className="flex items-start justify-between gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={master.photo} alt={master.name} className="w-full h-full object-cover object-top" />
                </div>
                <span className="text-muted-foreground text-sm bg-background px-3 py-1 rounded-full h-fit">
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