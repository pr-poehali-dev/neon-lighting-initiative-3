import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const styles = ["Black & Grey", "Neo-Traditional", "Geometric", "Fine Line", "Japanese"]

function StyleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % styles.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={index}
        className="font-serif text-3xl md:text-4xl text-foreground text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {styles[index]}
      </motion.span>
    </div>
  )
}

function MastersGrid() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2 w-full max-w-[140px]">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="rounded-md min-h-[40px] flex items-center justify-center text-xs font-medium"
            animate={{
              backgroundColor: active === i ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.15)",
              color: active === i ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
            }}
            transition={{ duration: 0.4 }}
          >
            М{i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BookingIndicator() {
  const [step, setStep] = useState(0)
  const steps = ["Выбор стиля", "Мастер", "Дата", "Готово!"]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2"
          animate={{ opacity: i <= step ? 1 : 0.2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full"
            animate={{ backgroundColor: i < step ? "#a855f7" : i === step ? "#a855f7" : "hsl(var(--foreground) / 0.15)" }}
          />
          <span className="text-xs text-foreground">{s}</span>
        </motion.div>
      ))}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Почему выбирают нас
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <StyleRotator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Любой стиль</h3>
              <p className="text-muted-foreground text-sm mt-1">От тонких линий до насыщенного японского стиля — воплотим любую идею.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <MastersGrid />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Команда мастеров</h3>
              <p className="text-muted-foreground text-sm mt-1">Четыре мастера с уникальным стилем и многолетним опытом.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <BookingIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Простая запись</h3>
              <p className="text-muted-foreground text-sm mt-1">Выберите стиль, мастера и удобное время — всё онлайн за минуту.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
