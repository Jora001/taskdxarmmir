import styles from "./Subscribe.module.css";
import React from "react";

function Subscribe(){
    return (<div className={styles.Subscribe}>
        <div className={styles.title}>
            <div>
                <h6>Practice Advice</h6>
            </div>
            <div>
                <h2>Featured Products</h2>
            </div>
            <div>
                <span className={styles.text1}>Problems trying to resolve the conflict between<br /></span>
                <span className={styles.text2}>the two major realms of Classical physics: Newtonian mechanics</span>
            </div>
        </div>
        <div className={styles.email}>
            <input type="text" placeholder="Your Email" />
            <button><span>Subscribe</span></button>
        </div>
    </div>)
}

export default Subscribe;