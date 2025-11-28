"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import styles from "./Header.module.css";
import Logo from "../../public/Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.leftGroup}>
          <button
            className={styles.mobileMenuBtn}
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={styles.logoIcon}>
            <Image src={Logo} alt="Appscrip Logo" />
          </div>
        </div>

        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            LOGO
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={20} />
          </button>
          <button className={styles.iconBtn} aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            <ShoppingBag size={20} />
          </button>
          <button
            className={`${styles.iconBtn} ${styles.desktopOnly}`}
            aria-label="Account"
          >
            <User size={20} />
          </button>
          <div className={`${styles.langSelector} ${styles.desktopOnly}`}>
            ENG <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link
              href="/"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              href="/stories"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              STORIES
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Breadcrumbs */}
      <div className={styles.mobileBreadcrumbs}>
        <span className={styles.breadcrumbItem}>HOME</span>
        <span className={styles.breadcrumbSeparator}>|</span>
        <span className={styles.breadcrumbItem}>SHOP</span>
      </div>
    </header>
  );
}
