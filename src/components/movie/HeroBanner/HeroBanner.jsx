import { motion } from 'framer-motion';
import { FiInfo, FiPlay } from 'react-icons/fi';
import Button from '../../common/Button/Button';
import styles from './HeroBanner.module.scss';

const MotionSection = motion.section;
const MotionDiv = motion.div;

function HeroBanner({ movie }) {
    return (
        <MotionSection
            className={styles.banner}
            style={{ backgroundImage: `url(${movie.backdrop})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <MotionDiv
                className={styles.backdropZoom}
                style={{ backgroundImage: `url(${movie.backdrop})` }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 10, ease: 'easeOut' }}
            />

            <div className={styles.overlay} />

            <div className={`container ${styles.contentWrap}`}>
                <MotionDiv
                    className={styles.content}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                >
                    <div className={styles.badges}>
                        {movie.badges.map((badge) => (
                            <span key={badge} className={styles.badge}>
                                {badge}
                            </span>
                        ))}
                    </div>

                    <h1 className={styles.title}>{movie.title}</h1>

                    <div className={styles.meta}>
                        <span>{movie.year}</span>
                        <span>{movie.category}</span>
                        <span>{movie.rating.toFixed(1)} Rating</span>
                    </div>

                    <p className={styles.description}>{movie.description}</p>

                    <div className={styles.actions}>
                        <Button icon={<FiPlay />} size="large">
                            Xem ngay
                        </Button>
                        <Button icon={<FiInfo />} size="large" variant="secondary">
                            Thông tin chi tiết
                        </Button>
                    </div>
                </MotionDiv>
            </div>
        </MotionSection>
    );
}

export default HeroBanner;
