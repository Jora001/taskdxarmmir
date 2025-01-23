import styles from "./Content.module.css";
import React from "react";
import computer from "../../pics/computer_pic.png";
import profile1 from "../../pics/profile1.png";
import star from "../../icons/star.png";
import frame from "../../icons/Frame.png";
import alarm from "../../icons/alarm.png";
import waves from "../../icons/waves.png";
import mountain from "../../icons/mountain.png";
import arrow from "../../icons/vector.png";
import basket from "../../icons/basket.png";
import heart from "../../icons/heart.png";
import eye from "../../icons/eye.png";

function Content(){
    return (<div className={styles.content}>
        <div className={styles.title}>
            <h6>Practice Advice</h6>
            <h2>Packages that are aprodable</h2>
            <div className={styles.text}>
                <span className={styles.text1}>Problems trying to resolve the conflict between<br /></span>
                <span className={styles.text2}>the two major realms of Classical physics: Newtonian mechanics</span>
            </div>
        </div>
        <div className={styles.carousel}>
            <div className={styles.box1}>
                <img src={computer} alt="cmp" />
                <div className={styles.description}>
                    <div className={styles.line1}>
                        <a href="http://facebook.com">English Departement</a>
                        <div className={styles.rating}>
                            <img src={star} alt="" />
                            <span>4.9</span>
                        </div>
                    </div>
                    <span className={styles.graphicdesign}>Graphic Design</span>
                    <p className={styles.text}>We focus on ergonomics and meeting<br />you where you work. It's only a<br />keystroke away.</p>
                    <div className={styles.sales}>
                        <img src={frame} alt="" className={styles.arrow} />
                        <span>15 Sales</span>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.leftprice}>$16.48</span>
                        <span className={styles.rightprice}>$6.48</span>
                    </div>
                    <div className={styles.details}>
                        <img src={alarm} alt="" />
                        <span>22hr 30min</span>
                        <img src={waves} alt="" />
                        <span>64 Lessons</span>
                        <img src={mountain} alt="" />
                        <span>Progress</span>
                    </div>
                    <div>
                        <button>
                            <span>Learn More</span>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div> 
                <div className={styles.addition}>
                    <span>Sale</span>
                </div>
                <div className={styles.options}>
                    <img src={heart} alt="" />
                    <img className={styles.basket} src={basket} alt="" />
                    <img src={eye} alt="" />
                </div>
            </div>
            <div className={styles.box2}>
                <img src={profile1} alt="p2" />
                <div className={styles.description}>
                    <div className={styles.line1}>
                        <a href="http://facebook.com">English Departement</a>
                        <div className={styles.rating}>
                            <img src={star} alt="" />
                            <span>4.9</span>
                        </div>
                    </div>
                    <span className={styles.graphicdesign}>Graphic Design</span>
                    <p className={styles.text}>We focus on ergonomics and meeting<br />you where you work. It's only a<br />keystroke away.</p>
                    <div className={styles.sales}>
                        <img src={frame} alt="" className={styles.arrow} />
                        <span>15 Sales</span>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.leftprice}>$16.48</span>
                        <span className={styles.rightprice}>$6.48</span>
                    </div>
                    <div className={styles.details}>
                        <img src={alarm} alt="" />
                        <span>22hr 30min</span>
                        <img src={waves} alt="" />
                        <span>64 Lessons</span>
                        <img src={mountain} alt="" />
                        <span>Progress</span>
                    </div>
                    <div>
                        <button>
                            <span>Learn More</span>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.addition}>
                    <span>Sale</span>
                </div>
                <div className={styles.options}>
                    <img src={heart} alt="" />
                    <img className={styles.basket} src={basket} alt="" />
                    <img src={eye} alt="" />
                </div>
            </div>
          
        </div>
    </div>)
}

export default Content;