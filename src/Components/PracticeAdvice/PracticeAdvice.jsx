import styles from "./PracticeAdvice.module.css";
import React from "react";
import star from "../../icons/staricon.jpg";
import emptystar from "../../icons/emptystaricon.jpg";
import pic1 from "../../pics/pic1.png";
import pic2 from "../../pics/pic2.png";

function PracticeAdvice(){
    return (<div className={styles.PracticeAdvice}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h6>Practice Advice</h6>
                    <h2>Each and every client is important</h2>
                    <div className={styles.text}>
                        <span className={styles.text1}>Problems trying to resolve the conflict between<br /></span>
                        <span className={styles.text2}>the two major realms of Classical physics: Newtonian mechanics</span>
                    </div>
                </div>
            </div>
        </div>
            <div className={styles.footer}>
                <div className={styles.carousel}>
                    <div className={styles.comment2}>
                        <div className={styles.image1}>
                            <img src={pic1} alt="pic1" /> 
                        </div>
                        <div className={styles.content}>
                            <span className={styles.text}>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</span>
                        </div>
                        <div>
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={emptystar} alt="Icon of an empty star" />
                        </div>
                        <div>
                            <h5>Regina Miles</h5>
                            <h6>Designer</h6>
                        </div>
                    </div>
                    <div className={styles.comment3}>
                        <div className={styles.image2}>
                            <img src={pic2} alt="pic2" />
                        </div>
                        <div>
                            <span className={styles.text}>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</span>
                        </div>
                        <div>
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={emptystar} alt="Icon of an empty star" />
                        </div>
                        <div>
                            <h5>Regina Miles</h5>
                            <h6>Designer</h6>
                        </div>
                    </div>
                    {/* <div className={styles.comment4}>comment4</div> */}
                </div>
            </div> 
    </div>);
}

export default PracticeAdvice;