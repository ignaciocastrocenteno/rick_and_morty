import React from "react";
import styles from "../footer/Footer.module.css";

export default function Footer() {
  return (
    <small className={styles.small}>
      <em className={styles.author}>
        &copy; Copyright 2023, Ignacio Castro Centeno. All rights reserved
      </em>
    </small>
  );
}
