import { motion } from 'framer-motion';
import HeroBanner from '../../components/movie/HeroBanner/HeroBanner';
import MovieRow from '../../components/movie/MovieRow/MovieRow';
import { featuredMovie, movieSections } from './moviesData';
import styles from './Home.module.scss';

const MotionMain = motion.main;

function Home() {
    return (
        <MotionMain
            className={styles.home}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
        >
            <HeroBanner movie={featuredMovie} />

            <section className={styles.rowsWrap}>
                <MovieRow title="TV Shows" movies={movieSections[1].movies} sectionId="tv-shows" />
                {movieSections.map((section) => (
                    <MovieRow
                        key={section.id}
                        title={section.title}
                        movies={section.movies}
                        sectionId={section.id === 'action-movies' ? 'movies' : section.id}
                    />
                ))}
                <MovieRow title="Danh Sách Của Tôi" movies={movieSections[2].movies} sectionId="my-list" />
            </section>
        </MotionMain>
    );
}

export default Home;
