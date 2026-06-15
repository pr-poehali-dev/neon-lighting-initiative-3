import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const timeline = [
  {
    period: "VIII–XII века",
    icon: "Scroll",
    title: "Истоки: метки и наказание",
    body: "В раннесредневековой Японии татуировки использовались как метод наказания преступников — на лбу или запястье выжигали или накалывали знаки позора. Это резко контрастирует с современным восприятием иредзуми как высокого искусства.",
  },
  {
    period: "XVII–XIX века",
    icon: "BookOpen",
    title: "Эпоха Эдо: рождение иредзуми",
    body: "В период Эдо татуировка трансформировалась в подлинное искусство. Рабочие, пожарные и ремесленники делали обширные татуировки на торсе как символ мужества и принадлежности к гильдии. Появились первые профессиональные мастера — хоримоно.",
  },
  {
    period: "1868 год",
    icon: "Ban",
    title: "Запрет эпохи Мэйдзи",
    body: "С открытием Японии для Запада правительство запретило татуировки, считая их препятствием для формирования цивилизованного имиджа страны. Парадоксально, но именно это подстегнуло интерес иностранцев — тату-мастера уходили в подполье и работали для европейской знати.",
  },
  {
    period: "1945 год",
    icon: "Unlock",
    title: "Снятие запрета",
    body: "После Второй мировой войны американские оккупационные власти сняли запрет на татуировки. Однако в общественном сознании иредзуми оставалась связанной с якудза — японской мафией, что обусловило стигматизацию, сохраняющуюся до сих пор.",
  },
  {
    period: "XX–XXI века",
    icon: "Globe",
    title: "Мировое признание",
    body: "Японский стиль завоевал весь мир. Мастера вроде Хорийоши III стали легендами международного уровня. Сегодня иредзуми — один из самых узнаваемых и уважаемых стилей в мире тату, а очередь к лучшим мастерям растягивается на годы.",
  },
]

const symbols = [
  { name: "Карп кои", meaning: "Удача, настойчивость, преодоление трудностей", icon: "Fish" },
  { name: "Дракон", meaning: "Сила, мудрость, защита", icon: "Flame" },
  { name: "Тигр", meaning: "Храбрость, долголетие, защита от злых духов", icon: "Shield" },
  { name: "Сакура", meaning: "Красота, скоротечность жизни, новое начало", icon: "Flower2" },
  { name: "Феникс", meaning: "Возрождение, бессмертие, триумф над невзгодами", icon: "Zap" },
  { name: "Змея", meaning: "Мудрость, исцеление, цикличность жизни", icon: "Infinity" },
]

export default function BlogJapaneseTattoo() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-foreground text-background px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/acf7e5a5-e8dc-4330-9749-bb10bac57a8c.jpg"
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
            История
          </motion.span>

          <motion.h1
            className="font-serif text-4xl md:text-6xl mt-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            История японской татуировки: от самураев до наших дней
          </motion.h1>

          <motion.p
            className="mt-6 text-background/60 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Иредзуми — искусство с тысячелетней историей. От клейма позора до мирового признания: как японская татуировка стала символом силы и красоты.
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Timeline */}
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Хронология
        </motion.p>

        <div className="relative space-y-8 before:absolute before:left-5 before:top-0 before:bottom-0 before:w-px before:bg-border">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-6 pl-14 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="absolute left-0 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center border-2 border-background">
                <Icon name={item.icon} size={18} className="text-primary" />
              </div>
              <div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.period}</span>
                <h2 className="font-serif text-xl text-foreground mt-1 mb-2">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Symbols */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">Символика</p>
          <h2 className="font-serif text-3xl text-foreground mb-8">Что означают главные образы</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {symbols.map((symbol, i) => (
              <motion.div
                key={i}
                className="bg-secondary rounded-xl p-5 flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={symbol.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground">{symbol.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{symbol.meaning}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 bg-secondary rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl text-foreground">Хотите японский стиль?</h3>
          <p className="text-muted-foreground mt-3 mb-8">Наши мастера специализируются на иредзуми — запишитесь на консультацию, чтобы обсудить вашу идею.</p>
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
