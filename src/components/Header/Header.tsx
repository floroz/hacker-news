import React from "react";
import styles from "./Header.module.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <div>
        <h3>Logo</h3>
      </div>
      <nav></nav>
    </header>
  );
};

export default Header;
