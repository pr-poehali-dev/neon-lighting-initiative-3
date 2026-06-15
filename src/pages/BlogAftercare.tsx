import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const sections = [
  {
    icon: "Clock",
    title: "Первые 2–3 часа",
    body: "После сеанса мастер накроет тату плёнкой или повязкой. Не снимайте её раньше времени — она защищает свежую рану от бактерий. Первые часы тату будет выделять плазму и излишки краски — это нормально.",
  },
  {
    icon: "Droplets",
    title: "Первое промывание",
    body: "Через 2–3 часа аккуратно снимите плёнку и промойте тату тёплой водой с мягким антибактериальным мылом без отдушек. Не трите — промакивайте чистыми руками. После промывания дайте коже высохнуть на воздухе 10–15 минут.",
  },
  {
    icon: "Sparkles",
    title: "Нанесение заживляющего крема",
    body: "Нанесите тонкий слой заживляющего крема (Bepanthen, «Спасатель» или специальный тату-бальзам). Не мажьте толстым слоем — кожа должна дышать. Повторяйте 3–4 раза в день на протяжении двух недель.",
  },
  {
    icon: "ShowerHead",
    title: "Водные процедуры",
    body: "Принимайте душ как обычно, но не направляйте сильную струю воды прямо на тату. Первые 2–3 недели полностью исключите ванну, бассейн, сауну и открытые водоёмы — вода вымывает краску и создаёт риск инфекции.",
  },
  {
    icon: "Sun",
    title: "Защита от солнца",
    body: "Ультрафиолет — главный враг татуировки. В период заживления (2–4 недели) не подставляйте тату под прямые солнечные лучи. После полного заживления всегда наносите на тату солнцезащитный крем SPF 50+.",
  },
  {
    icon: "Hand",
    title: "Не чешите и не срывайте корочки",
    body: "Примерно на 3–7 день тату начнёт шелушиться и чесаться — это признак заживления. Ни в коем случае не чешите и не срывайте корочки: это вытянет краску и испортит рисунок. Если зуд невыносим — слегка похлопайте ладонью.",
  },
  {
    icon: "Shirt",
    title: "Одежда и трение",
    body: "Выбирайте свободную одежду из натуральных тканей, которая не натирает место с тату. Синтетика и тесная одежда могут вызвать раздражение и занести инфекцию. Спите на чистом постельном белье.",
  },
  {
    icon: "AlertTriangle",
    title: "Когда обратиться к мастеру",
    body: "Если тату сильно покраснела, опухла, появился гной или температура — немедленно свяжитесь с мастером. Лёгкое покраснение в первые дни — норма, но выраженные симптомы воспаления требуют внимания.",
  },
]

export default function BlogAftercare() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-foreground text-background px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/5ad952e5-f51e-4c98-adca-d5789996d1f9.jpg"
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
            Уход
          </motion.span>

          <motion.h1
            className="font-serif text-4xl md:text-6xl mt-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Уход за тату: что делать в первые две недели
          </motion.h1>

          <motion.p
            className="mt-6 text-background/60 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Правильный уход — половина успеха. Следуйте этим правилам, чтобы цвета остались яркими, а заживление прошло быстро.
          </motion.p>
        </div>
      </div>

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

        <motion.div
          className="mt-20 bg-secondary rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl text-foreground">Остались вопросы?</h3>
          <p className="text-muted-foreground mt-3 mb-8">Мастер всегда на связи — напишите нам, если что-то беспокоит в процессе заживления.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Связаться с мастером
          </button>
        </motion.div>
      </div>
    </div>
  )
}
