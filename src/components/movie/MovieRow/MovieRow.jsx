import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import MovieCard from '../MovieCard/MovieCard'
import styles from './MovieRow.module.scss'

const MotionSection = motion.section

function MovieRow({ title, movies, sectionId }) {
  const railRef = useRef(null)

  const handleScroll = (direction) => {
    if (!railRef.current) return

    const amount = railRef.current.clientWidth * 0.9
    railRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <MotionSection
      className={styles.row}
      id={sectionId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.controls}>
            <button type="button" aria-label={`Scroll ${title} left`} onClick={() => handleScroll('left')}>
              <FiChevronLeft />
            </button>
            <button type="button" aria-label={`Scroll ${title} right`} onClick={() => handleScroll('right')}>
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div ref={railRef} className={styles.rail}>
          {movies.map((movie) => (
            <div key={`${sectionId}-${movie.id}`} className={styles.cardSlot}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default MovieRow
