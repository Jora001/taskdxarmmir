import styles from "./Subscribe.module.css";
import React from "react";

function Subscribe() {
    return (
        <div className={styles.Subscribe}>
            <div className={styles.title}>
                <h6>Practice Advice</h6>
                <h2>Featured Products</h2>
                <p className={styles.text1}>
                    Problems trying to resolve the conflict between
                </p>
                <p className={styles.text2}>
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className={styles.email}>
                <input type="email" placeholder="Your Email" />
                <button>
                    <span>Subscribe</span>
                </button>
            </div>
        </div>
    );
}

export default Subscribe;
