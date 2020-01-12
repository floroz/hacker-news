import React from "react";
import styles from "./Header.module.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <nav></nav>
    </header>
  );
};

export default Header;
