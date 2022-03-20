import styles from '../styles/mainLayout.module.scss';
import Link from "next/link";


const MainLayout = ({ children }) => {
  return (
    <>
    <header>
      <nav className={styles.header__nav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
      </nav>
    </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout;