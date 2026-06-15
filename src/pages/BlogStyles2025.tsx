import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const styles = [
  {
    icon: "Brush",
    name: "Fine Line",
    trend: "🔥 Главный тренд",
    body: "Тонкие, почти невесомые линии, создающие иллюзию карандашного рисунка. Идеален для флоральных мотивов, портретов и геометрии. Подходит для запястий, ключиц и рёбер. Требует высокой точности от мастера — со временем линии могут немного расплыться.",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/fb335ee8-f279-4920-8f60-59217048b604.jpg",
  },
  {
    icon: "Circle",
    name: "Blackwork & Geometric",
    trend: "📐 Популярно",
    body: "Смелые чёрные формы, паттерны и сакральная геометрия. Стиль отличается максимальной чёткостью и контрастностью. Хорошо смотрится на предплечьях, голенях и спине. Не выцветает со временем так сильно, как цветные работы.",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/ebad0987-5a46-4f55-84a7-3871c47bcb03.jpg",
  },
  {
    icon: "Palette",
    name: "Neo-Traditional",
    trend: "🌹 Классика в тренде",
    body: "Переосмысление классической американской школы с более богатой палитрой и детализацией. Яркие, насыщенные цвета, чёткие контуры и декоративные элементы. Розы, животные, портреты — всё выглядит выразительно и не теряет вид с годами.",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/6a58efd0-deea-42d7-a645-31d237e44b51.jpg",
  },
  {
    icon: "Moon",
    name: "Black & Grey Realism",
    trend: "🖤 Вне времени",
    body: "Фотореалистичные изображения в чёрно-белой гамме. Портреты людей, животных, архитектура — всё передаётся с поразительной точностью. Один из самых технически сложных стилей, требующий мастера с большим опытом в реализме.",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/5ad952e5-f51e-4c98-adca-d5789996d1f9.jpg",
  },
  {
    icon: "Waves",
    name: "Japanese / Irezumi",
    trend: "🐉 Всегда актуально",
    body: "Традиционная японская школа с богатой символикой: карпы кои, драконы, самураи, сакура. Отличается характерной цветовой гаммой и динамичными волновыми фонами. Обычно делается в виде рукавов или больших фрагментов, идеально заполняя форму тела.",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/acf7e5a5-e8dc-4330-9749-bb10bac57a8c.jpg",
  },
  {
    icon: "Feather",
    name: "Watercolor",
    trend: "🎨 Нежный выбор",
    body: "Имитация акварельной живописи — размытые края, брызги цвета, мягкие переходы. Смотрится невероятно живо и художественно. Важно понимать: без чёткого контура такие работы выцветают быстрее. Лучше сочетать с blackwork-основой.",
    image: "https://cdn.poehali.dev/projects/5b4ad5a0-5e02-4e82-bd13-f8d7781af35e/files/2ded937c-e208-443a-9e7d-ac7dd51c9786.jpg",
  },
]

export default function BlogStyles2025() {
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
            Тренды
          </motion.span>

          <motion.h1
            className="font-serif text-4xl md:text-6xl mt-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Популярные стили 2025 года: что выбрать?
          </motion.h1>

          <motion.p
            className="mt-6 text-background/60 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Разбираем 6 актуальных стилей — от утончённого fine line до монументального японского irezumi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {styles.map((style, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden bg-secondary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-background rounded-lg flex items-center justify-center">
                      <Icon name={style.icon} size={18} className="text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl text-foreground">{style.name}</h2>
                  </div>
                  <span className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full">{style.trend}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{style.body}</p>
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
          <h3 className="font-serif text-3xl text-foreground">Не можете определиться?</h3>
          <p className="text-muted-foreground mt-3 mb-8">Приходите на консультацию — мастер поможет подобрать стиль под вашу идею и место на теле.</p>
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
