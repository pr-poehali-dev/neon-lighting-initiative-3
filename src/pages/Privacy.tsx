import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const sections = [
  {
    title: "Какие данные мы собираем",
    body: "При записи на сеанс мы собираем ваше имя и номер телефона. Эти данные необходимы исключительно для связи с вами по вопросам записи. Мы не собираем платёжные данные, данные банковских карт или иную финансовую информацию.",
  },
  {
    title: "Как мы используем ваши данные",
    body: "Ваши контактные данные используются только для: подтверждения записи на сеанс, напоминания о предстоящем визите, ответа на ваши вопросы. Мы не используем ваши данные для рекламных рассылок без вашего явного согласия.",
  },
  {
    title: "Передача данных третьим лицам",
    body: "Мы не продаём, не передаём и не раскрываем ваши персональные данные третьим лицам. Исключение составляют случаи, прямо предусмотренные законодательством Российской Федерации.",
  },
  {
    title: "Хранение данных",
    body: "Ваши данные хранятся на защищённых серверах. Мы принимаем технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",
  },
  {
    title: "Ваши права",
    body: "Вы вправе в любой момент запросить информацию о хранящихся у нас ваших данных, потребовать их исправления или удаления. Для этого свяжитесь с нами по телефону +7 960 553-66-79 или напишите на почту dianaboyko2024@mail.ru.",
  },
  {
    title: "Файлы cookie",
    body: "Наш сайт использует технические файлы cookie, необходимые для корректной работы сайта. Они не содержат персональных данных и не передаются третьим лицам. Используя сайт, вы соглашаетесь с использованием cookie.",
  },
  {
    title: "Изменения политики",
    body: "Мы оставляем за собой право обновлять настоящую политику конфиденциальности. Актуальная версия всегда доступна на этой странице. Дата последнего обновления: июнь 2025 года.",
  },
]

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-foreground text-background px-6 py-20">
        <div className="max-w-3xl mx-auto">
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
            Документы
          </motion.span>
          <motion.h1
            className="font-serif text-4xl md:text-6xl mt-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Политика конфиденциальности
          </motion.h1>
          <motion.p
            className="mt-4 text-background/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            INK Tattoo Studio · Последнее обновление: июнь 2025
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="border-b border-border pb-10 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <h2 className="font-serif text-xl text-foreground mb-3">
                {i + 1}. {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-secondary rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">Вопросы по обработке данных?</p>
          <a
            href="tel:+79605536679"
            className="text-foreground font-medium text-lg mt-2 block hover:text-primary transition-colors"
          >
            +7 960 553-66-79
          </a>
        </motion.div>
      </div>
    </div>
  )
}
