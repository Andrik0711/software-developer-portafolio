"use client";

import { useState } from "react";
import styles from "@/components/about/carousel.module.scss";

const skills = [
  { title: "Git" },
  { title: "GitLab" },
  { title: "GitHub" },
  { title: "BitBucket" },
  { title: "Jira" },
  { title: "Trello" },
  { title: "Django" },
  { title: "Laravel" },
  { title: "Bootstrap" },
  { title: "TailwindCSS" },
  { title: "CSS" },
  { title: "HTML" },
  { title: "Python" },
  { title: "PHP" },
  { title: "JavaScript" },
  { title: "SQL" },
  { title: "PostgreSQL" },
];

export default function TechnicalCarousel() {
  const [showSkillsList, setShowSkillsList] = useState(false);

  const toggleSkillsList = () => {
    setShowSkillsList((prev) => !prev);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Botón Minimalista (ícono de ojo) */}
      <button className={styles.showListButton} onClick={toggleSkillsList}>
        {showSkillsList ? "👁️" : "👁️‍🗨️"}
      </button>

      {/* Mostrar las habilidades como cadena separada por comas si el estado es verdadero */}
      <div className={`${styles.skillsList} ${showSkillsList ? styles.show : ""}`}>
        <p>
          {skills.map((skill, index) => skill.title).join(", ")}
        </p>
      </div>
    </div>
  );
}
