import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const sections = [
  {
    title: "Общие положения",
    body: "Настоящие условия регулируют использование сайта INK Tattoo Studio. Используя сайт, вы соглашаетесь с данными условиями в полном объёме. Если вы не согласны с какими-либо положениями — пожалуйста, прекратите использование сайта.",
  },
  {
    title: "Услуги студии",
    body: "INK Tattoo Studio предоставляет услуги по нанесению татуировок, пирсингу и смежным процедурам. Все процедуры выполняются квалифицированными мастерами с соблюдением санитарных норм и требований безопасности.",
  },
  {
    title: "Запись и отмена",
    body: "Запись на сеанс осуществляется через форму на сайте или по телефону. Об отмене или переносе записи просим предупреждать не менее чем за 24 часа. При неявке без предупреждения студия вправе потребовать предоплату при следующей записи.",
  },
  {
    title: "Возраст и согласие",
    body: "Услуги по нанесению татуировок оказываются лицам, достигшим 18 лет. Для лиц от 16 до 18 лет требуется письменное согласие родителей или законных представителей. Студия вправе отказать в обслуживании без объяснения причин.",
  },
  {
    title: "Здоровье и противопоказания",
    body: "Клиент обязан заблаговременно сообщить мастеру о наличии аллергий, хронических заболеваний, беременности или иных состояний здоровья, которые могут повлиять на процедуру. Студия не несёт ответственности за последствия, вызванные скрытой медицинской информацией.",
  },
  {
    title: "Результат и уход",
    body: "Результат татуировки во многом зависит от соблюдения клиентом правил ухода в период заживления. Студия предоставляет подробные рекомендации после каждого сеанса. Ответственность за несоблюдение правил ухода лежит на клиенте.",
  },
  {
    title: "Интеллектуальная собственность",
    body: "Все эскизы, разработанные мастерами студии, являются интеллектуальной собственностью INK Tattoo Studio. Использование эскизов без согласия студии запрещено. Студия вправе публиковать фотографии выполненных работ в портфолио с согласия клиента.",
  },
  {
    title: "Ответственность",
    body: "Студия не несёт ответственности за ущерб, вызванный обстоятельствами непреодолимой силы, а также за последствия несоблюдения клиентом предоставленных рекомендаций по уходу. Максимальная ответственность студии ограничена стоимостью оказанной услуги.",
  },
  {
    title: "Изменение условий",
    body: "Студия оставляет за собой право изменять настоящие условия в любое время. Актуальная версия всегда размещена на этой странице. Продолжение использования сайта после изменений означает ваше согласие с новыми условиями.",
  },
]

export default function Terms() {
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
            Условия использования
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
          <p className="text-muted-foreground">Вопросы по условиям?</p>
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
