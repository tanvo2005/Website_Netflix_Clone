import { motion } from 'framer-motion'
import styles from './Loader.module.scss'

const MotionSpan = motion.span

function Loader() {
  return (
    <div className={styles.loader} aria-live="polite" aria-label="Loading">
      {[0, 1, 2].map((item) => (
        <MotionSpan
          key={item}
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -4, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: item * 0.15 }}
        />
      ))}
    </div>
  )
}

export default Loader
