'use client'; // Add this at the top of the file

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 818px)');
    const handleResize = () => setIsScreenSmall(mediaQuery.matches);

    handleResize(); // Set the initial state based on current screen size
    mediaQuery.addEventListener('change', handleResize); // Add listener for screen width changes

    return () => mediaQuery.removeEventListener('change', handleResize); // Cleanup listener on unmount
  }, []);

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
        <ul className={`${styles.navLinks} ${menuOpen && isScreenSmall ? styles.navOpen : ''}`}>
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
            <Link href="/projects" legacyBehavior>
              <a onClick={closeMenu}>Project Works & Research</a>
            </Link>
          </li>
          <li className={isActive('/work')}>
            <Link href="/work" legacyBehavior>
              <a onClick={closeMenu}>Internships and Works</a>
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
