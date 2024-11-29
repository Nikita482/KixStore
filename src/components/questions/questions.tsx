import styles from "./questions.module.css";
import gsap from "gsap";
import { useState } from "react";

interface intrInfo {
  id: number;
  question: string;
  answer: string;
}

const Questions: React.FC = () => {
  const [openAnswers, setOpenAnswers] = useState<{ [key: string]: boolean }>({});

  const openAnswer = (answer: string, btn: string, id: number) => {
    const isOpen = openAnswers[id];

    if (isOpen) {
      gsap.to(`#${answer}`, { opacity: 0, marginTop: -40 });
      gsap.to(`#${btn}`, { rotate: 0 });
    } else {
      gsap.to(`#${answer}`, { opacity: 1, marginTop: 0 });
      gsap.to(`#${btn}`, { rotate: 45 });
    }

    setOpenAnswers((prev) => ({
      ...prev,
      [id]: !isOpen,
    }));
  };

  const info: intrInfo[] = [
    { id: 1, question: "Вопрос 1", answer: "Ответ 1" },
    { id: 2, question: "Вопрос 2", answer: "Ответ 2" },
    { id: 3, question: "Вопрос 3", answer: "Ответ 3" },
  ];

  return (
    <>
      <div id="questions" className={styles.wrapper}>
        <h1 className={styles.name}>Часто задаваемые вопросы</h1>

        <div className={styles.questions}>
          {info.map((i) => (
            <div key={i.id} className={styles.item}>
              <div className={styles.itemQuestion}>
                <h2>{i.question}</h2>
                
                <div onClick={() => openAnswer(`answer${i.id}`, `btn${i.id}`, i.id)} id={`btn${i.id}`} className={styles.btn} >
                  <ion-icon name="add"></ion-icon>
                </div>
              </div>

              <div id={`answer${i.id}`} className={styles.answer}>
                <h3>{i.answer}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
