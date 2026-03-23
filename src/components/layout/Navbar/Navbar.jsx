import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiUser } from 'react-icons/fi'
import styles from './Navbar.module.scss'

const MotionHeader = motion.header

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'TV Shows', to: '/#tv-shows' },
  { label: 'Movies', to: '/#movies' },
  { label: 'My List', to: '/#my-list' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MotionHeader
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.leftCluster}>
            <Link className={styles.logo} to="/" aria-label="Movie app home">
              NETVIEW
            </Link>

            <nav className={styles.navLinks} aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive && item.to === '/' ? styles.active : ''}`
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className={styles.rightCluster}>
            <div className={`${styles.searchWrap} ${isSearchOpen ? styles.searchOpen : ''}`}>
              <button
                className={styles.iconButton}
                type="button"
                aria-label="Toggle search"
                onClick={() => setIsSearchOpen((value) => !value)}
              >
                <FiSearch />
              </button>

              <input
                className={styles.searchInput}
                type="text"
                placeholder="Titles, genres, people"
                aria-label="Search"
              />
            </div>

            <button className={styles.avatarButton} type="button" aria-label="User profile">
              <FiUser />
            </button>
          </div>
        </div>
      </div>
    </MotionHeader>
  )
}

export default Navbar
