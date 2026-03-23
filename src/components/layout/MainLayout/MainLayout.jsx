import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './MainLayout.module.scss'

function MainLayout() {
  return (
    <div className={styles.layoutShell}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
