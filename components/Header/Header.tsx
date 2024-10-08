import React from "react";
import styles from "./Header.module.css";
import { nav } from "../../constants/navMenuItems";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <a href="/">Seekers of Normandia</a>
      </div>
      <div className={styles.menu}>
        <nav>
          <ul className={styles.links}>
            {nav.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
