import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou Wheydson Richard</h1>
        <p className={styles.description}>
          Sou Desenvolvedor Software a 4 anos, ja passei por empresas como AYESA, ENGINEERING, ENEL SOLUÇÕES e MFDIGITALLAW. 
          Entre em contato para saber mais!
        </p>
        <a href="mailto:rwheydson@gmail.com" className={styles.contactBtn}>
          Meu contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/stickerImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
