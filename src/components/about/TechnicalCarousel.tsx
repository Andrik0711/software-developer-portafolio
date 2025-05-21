"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/components/about/carousel.module.scss";

const skills = [
  { title: "Git", description: "A distributed version control system that helps track changes, manage code repositories, and collaborate effectively with teams.", image: "/images/git.png" },
  { title: "GitLab", description: "A platform for version control, CI/CD pipelines, and issue tracking, ideal for DevOps and team collaboration.", image: "/images/gitlab.png" },
  { title: "GitHub", description: "A widely-used platform for hosting and reviewing code, managing repositories, and enabling collaboration in software development.", image: "/images/github.png" },
  { title: "BitBucket", description: "A tool for version control that integrates seamlessly with Jira, offering Git repository management and CI/CD support.", image: "/images/bitbucket.png" },
  { title: "Jira", description: "A project management software tailored for agile methodologies, enabling efficient tracking of tasks, issues, and workflows.", image: "/images/jira.png" },
  { title: "Trello", description: "A visual tool for organizing tasks, projects, and workflows using drag-and-drop boards and cards.", image: "/images/trello.png" },
  { title: "Django", description: "A high-level Python web framework for building scalable and secure web applications quickly and efficiently.", image: "/images/django.png" },
  { title: "Flask", description: "A lightweight Python web framework that provides the essentials for building web applications with flexibility and simplicity.", image: "/images/flask.png" },
  { title: "Laravel", description: "A PHP framework designed for robust web application development, emphasizing elegant syntax and scalability.", image: "/images/laravel.png" },
  { title: "Bootstrap", description: "A CSS framework for creating responsive and mobile-first web designs with prebuilt components and templates.", image: "/images/bootstrap.png" },
  { title: "TailwindCSS", description: "A utility-first CSS framework for designing custom web interfaces quickly and efficiently.", image: "/images/tailwind.png" },
  { title: "CSS", description: "A styling language that defines the visual appearance of web pages, including layout, colors, and fonts.", image: "/images/css.png" },
  { title: "HTML", description: "A markup language used to structure web content and enable interactive elements.", image: "/images/html.png" },
  { title: "Python", description: "A versatile programming language known for its simplicity, readability, and extensive application in web development, data science, AI, and more.", image: "/images/python.png" },
  { title: "PHP", description: "A server-side scripting language used primarily for web development and dynamic page creation.", image: "/images/php.png" },
  { title: "JavaScript", description: "A programming language for creating dynamic and interactive web content, widely used in frontend and backend development.", image: "/images/javascript.png" },
  { title: "SQL", description: "A language for querying and managing relational databases, essential for storing and retrieving structured data.", image: "/images/sql.png" },
  { title: "PostgreSQL", description: "A powerful, open-source relational database known for its advanced features, flexibility, and reliability.", image: "/images/postgresql.png" },
];

export default function TechnicalCarousel() {
  const [index, setIndex] = useState(0);
  const [showSkillsList, setShowSkillsList] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToPrev = () => {
    console.log('prev');
    setIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  const goToNext = () => {
    console.log('next');
    setIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const toggleSkillsList = () => {
    setShowSkillsList((prev) => !prev);
  };
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${index * 100}%)` }}>
        {skills.map((skill, i) => (
          <div key={i} className={styles.carouselItem}>
            <img src={skill.image} alt={skill.title} className={styles.image} />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Botón Izquierda */}
      <button className={styles.arrowLeft} onClick={goToPrev}>{"<"}</button>
      {/* Botón Derecha */}
      <button className={styles.arrowRight} onClick={goToNext}>{">"}</button>

      {/* Indicador de posición */}
      <div className={styles.indicator}>
        {index + 1} / {skills.length}
      </div>
    </div>
  );
}
