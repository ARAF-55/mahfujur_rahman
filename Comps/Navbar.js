'use client'; // Add this at the top of the file

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if a link is active (highlight the active link)
  const isActive = (path) => {
    return router.asPath === path ? styles.active : '';
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu after clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <h1>Mahfujur Rahman</h1>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
          <li className={isActive('/')}>
            <Link href="/" legacyBehavior>
              <a onClick={closeMenu}>Home</a>
            </Link>
          </li>
          <li className={isActive('/education')}>
            <Link href="/education" legacyBehavior>
              <a onClick={closeMenu}>Education</a>
            </Link>
          </li>
          <li className={isActive('/research')}>
            <Link href="/research" legacyBehavior>
              <a onClick={closeMenu}>Projects & Skills</a>
            </Link>
          </li>
          <li className={isActive('/work')}>
            <Link href="/work" legacyBehavior>
              <a onClick={closeMenu}>Work Experience</a>
            </Link>
          </li>
          <li className={isActive('/scores')}>
            <Link href="/scores" legacyBehavior>
              <a onClick={closeMenu}>Test Scores & Certificates</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
