import React from "react";
import styles from "./Content.module.css";
import computer from "../../pics/computer_pic.png";
import profile1 from "../../pics/profile1.png";
import star from "../../icons/star.png";
import frame from "../../icons/Frame.png";
import alarm from "../../icons/alarm.png";
import waves from "../../icons/waves.png";
import mountain from "../../icons/mountain.png";
import arrow from "../../icons/vector.png";

// Reusable Card Component
function Card({ image, title, rating, sales, price, duration, lessons, description }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.description}>
                <div className={styles.line1}>
                    <a href="http://facebook.com" className={styles.cardTitle}>{title}</a>
                    <div className={styles.rating}>
                        <img src={star} alt="Rating Star" />
                        <span>{rating}</span>
                    </div>
                </div>
                <p className={styles.text}>{description}</p>
                <div className={styles.sales}>
                    <img src={frame} alt="" className={styles.arrow} />
                    <span>{sales} Sales</span>
                </div>
                <div className={styles.price}>
                    <span className={styles.leftprice}>${price.original}</span>
                    <span className={styles.rightprice}>${price.discounted}</span>
                </div>
                <div className={styles.details}>
                    <img src={alarm} alt="Duration Icon" />
                    <span>{duration}</span>
                    <img src={waves} alt="Lessons Icon" />
                    <span>{lessons} Lessons</span>
                    <img src={mountain} alt="Progress Icon" />
                    <span>Progress</span>
                </div>
                <button className={styles.learnMoreButton}>
                    <span>Learn More</span>
                    <img src={arrow} alt="Arrow Icon" />
                </button>
            </div>
        </div>
    );
}

function Content() {
    const cardsData = [
        {
            image: computer,
            title: "English Department",
            rating: "4.9",
            sales: 15,
            price: { original: "16.48", discounted: "6.48" },
            duration: "22hr 30min",
            lessons: 64,
            description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        },
        {
            image: profile1,
            title: "Graphic Design",
            rating: "4.8",
            sales: 12,
            price: { original: "20.00", discounted: "10.00" },
            duration: "18hr 45min",
            lessons: 48,
            description: "Learn the basics of graphic design to enhance your creative skills.",
        },
    ];

    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <h6>Practice Advice</h6>
                <h2>Packages that are affordable</h2>
                <div className={styles.text}>
                    <span>Problems trying to resolve the conflict between</span>
                    <br />
                    <span>the two major realms of Classical physics: Newtonian mechanics</span>
                </div>
            </div>
            <div className={styles.carousel}>
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
}

export default Content;
