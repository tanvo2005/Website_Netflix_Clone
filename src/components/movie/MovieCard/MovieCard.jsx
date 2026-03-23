import { motion } from 'framer-motion';
import { FiHeart, FiInfo, FiPlus, FiStar } from 'react-icons/fi';
import Button from '../../common/Button/Button';
import styles from './MovieCard.module.scss';

const MotionArticle = motion.article;

function MovieCard({ movie }) {
    return (
        <MotionArticle
            className={styles.card}
            whileHover={{ scale: 1.1, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
        >
            <img className={styles.poster} src={movie.poster} alt={movie.title} loading="lazy" decoding="async" />

            <div className={styles.overlay}>
                <div className={styles.topMeta}>
                    <span className={styles.year}>{movie.year}</span>
                    <span className={styles.rating}>
                        <FiStar />
                        {movie.rating.toFixed(1)}
                    </span>
                </div>

                <div className={styles.bottomContent}>
                    <div>
                        <h3 className={styles.title}>{movie.title}</h3>
                        <p className={styles.category}>{movie.category}</p>
                    </div>

                    <div className={styles.actions}>
                        <Button icon={<FiInfo />} size="small">
                            xem chi tiết
                        </Button>
                        <Button icon={<FiPlus />} size="small" variant="secondary">
                            Thêm vào Danh sách
                        </Button>
                    </div>

                    <button className={styles.favorite} type="button" aria-label={`Favorite ${movie.title}`}>
                        <FiHeart />
                    </button>
                </div>
            </div>
        </MotionArticle>
    );
}

export default MovieCard;
