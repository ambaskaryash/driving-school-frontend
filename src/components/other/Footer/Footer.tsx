import React, { FC } from "react";

import styles from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/#categories" scroll={false}>
              Tariffs and prices
            </Link>
          </li>
          <li>
            <Link href="/#form" scroll={false}>
              Training request
            </Link>
          </li>
          <li>
            <Link href="/contacts/#header" scroll={false}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
