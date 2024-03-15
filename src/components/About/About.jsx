import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/wave.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                Sou um Desenvolvedor Back-end com experiência no desenvolvimento de sistema Back-end rápido e otimizados e APIs..
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Functional Analyst</h3>
              <p>
                Tenho Experiência como analista funcional realizando comunicações entre cliente e desenvolvedores para melhor desempenho de projetos.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Project Manager</h3>
              <p>
                Eu gerenciei equipe de desenvolvedores para criação de sistema com complexidade alta para o jurídico.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
