import { motion } from 'framer-motion'
import Button from '../../components/common/Button/Button'
import styles from './NotFound.module.scss'

const MotionSection = motion.section

function NotFound() {
  return (
    <MotionSection
      className={styles.notFound}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <div className={styles.panel}>
          <span className={styles.code}>404</span>
          <h1>Page not found</h1>
          <p>The screen you were looking for has faded out. Let's take you back to the homepage.</p>
          <Button size="large" to="/">
            Back Home
          </Button>
        </div>
      </div>
    </MotionSection>
  )
}

export default NotFound
