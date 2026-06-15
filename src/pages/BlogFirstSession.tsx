import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const sections = [
  {
    icon: "Utensils",
    title: "Поешьте перед сеансом",
    body: "Плотно покушайте за 1–2 часа до визита. Голод снижает болевой порог и может вызвать головокружение во время работы. Возьмите с собой шоколадку или сок на случай, если почувствуете слабость.",
  },
  {
    icon: "Droplets",
    title: "Увлажните кожу",
    body: "За несколько дней до сеанса регулярно наносите увлажняющий крем на место будущей татуировки. Здоровая и увлажнённая кожа лучше принимает краску и легче заживает. В день сеанса крем не наносите.",
  },
  {
    icon: "Wine",
    title: "Не употребляйте алкоголь",
    body: "Алкоголь разжижает кровь и увеличивает кровотечение во время работы, что ухудшает качество татуировки. Воздержитесь от алкоголя минимум за 24 часа до визита.",
  },
  {
    icon: "Shirt",
    title: "Оденьтесь удобно",
    body: "Наденьте одежду, которая даёт свободный доступ к нужному месту. Например, если тату на плече — выбирайте майку или топ. Одежда должна быть комфортной: сеанс может длиться несколько часов.",
  },
  {
    icon: "Sun",
    title: "Избегайте загара",
    body: "Не загорайте и не посещайте солярий минимум 2 недели до сеанса. Обгоревшая или свежезагорелая кожа хуже принимает краску и делает процесс болезненнее.",
  },
  {
    icon: "Pill",
    title: "Сообщите о лекарствах",
    body: "Если вы принимаете разжижители крови, антибиотики или другие препараты — обязательно предупредите мастера. Некоторые лекарства влияют на процесс заживления и результат.",
  },
  {
    icon: "MessageCircle",
    title: "Обсудите эскиз заранее",
    body: "Не стесняйтесь задавать вопросы и высказывать пожелания. Хороший мастер всегда готов внести правки в эскиз до начала работы. Лучше потратить лишние 10 минут на обсуждение, чем жалеть потом.",
  },
  {
    icon: "Heart",
    title: "Настройтесь психологически",
    body: "Небольшое волнение перед первым тату — это нормально. Постарайтесь расслабиться: слушайте музыку, глубоко дышите. Помните: мастер рядом и готов сделать паузу, если вам нужен отдых.",
  },
]

export default function BlogFirstSession() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-foreground text-background px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/2ded937c-e208-443a-9e7d-ac7dd51c9786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-12 text-sm"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>

          <motion.span
            className="text-xs uppercase tracking-widest text-background/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Советы
          </motion.span>

          <motion.h1
            className="font-serif text-4xl md:text-6xl mt-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Как подготовиться к первому сеансу татуировки
          </motion.h1>

          <motion.p
            className="mt-6 text-background/60 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            8 простых правил, которые сделают ваш первый опыт комфортным и результат — идеальным.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-10">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Icon name={item.icon} size={22} className="text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-xl text-foreground mb-2">
                  {i + 1}. {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-secondary rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl text-foreground">Готовы к первому тату?</h3>
          <p className="text-muted-foreground mt-3 mb-8">Запишитесь на бесплатную консультацию — обсудим идею и подберём мастера.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Записаться на консультацию
          </button>
        </motion.div>
      </div>
    </div>
  )
}
