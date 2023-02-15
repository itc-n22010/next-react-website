import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}
        </style>
      )}
      <button className={styles.btn} onClick={toggNav}>
        <span className={styles.bar} />
        <span className='sr-only'>SETSUNA</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link legacyBehavior href='/'>
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/about'>
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/blog'>
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
