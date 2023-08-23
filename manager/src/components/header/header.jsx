import React from "react";
import styles from "./header.module.css";
import { FaHome } from "react-icons/fa";

const Header = ({ schNm }) => {
  return (
    <header className={styles.header}>
      <a href={schNm ? "/" : "/start"} className={styles.home_btn}>
        <FaHome />
      </a>
      <div className={styles.text_top}>양주시 청소년 수련원</div>
      <div className={styles.text_bottom}>스마트한 추적 놀이</div>
    </header>
  );
};

export default Header;
