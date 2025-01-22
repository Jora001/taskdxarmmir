import React from "react";
import styles from "./PracticeAdvice.module.css";
import star from "../../icons/staricon.jpg";
import emptystar from "../../icons/emptystaricon.jpg";
import pic1 from "../../pics/pic1.png";
import pic2 from "../../pics/pic2.png";

function PracticeAdvice() {
  return (
    <div className={styles.PracticeAdvice}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h6>Practice Advice</h6>
            <h2>Each and every client is important</h2>
            <div className={styles.text}>
              <span className={styles.text1}>
                Problems trying to resolve the conflict between<br />
              </span>
              <span className={styles.text2}>
                the two major realms of Classical physics: Newtonian mechanics
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.carousel}>
            <Comment 
              imageSrc={pic1}
              text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
              rating={4}
              name="Regina Miles"
              designation="Designer"
            />
            <Comment 
              imageSrc={pic2}
              text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
              rating={4}
              name="Regina Miles"
              designation="Designer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Comment = ({ imageSrc, text, rating, name, designation }) => (
  <div className={styles.comment}>
    <div className={styles.image}>
      <img src={imageSrc} alt={`${name}'s feedback`} />
    </div>
    <div className={styles.content}>
      <span className={styles.text}>{text}</span>
    </div>
    <div className={styles.rating}>
      {[...Array(rating)].map((_, i) => (
        <img key={i} src={star} alt="Star" />
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <img key={i} src={emptystar} alt="Empty star" />
      ))}
    </div>
    <div className={styles.author}>
      <h5>{name}</h5>
      <h6>{designation}</h6>
    </div>
  </div>
);

export default PracticeAdvice;
