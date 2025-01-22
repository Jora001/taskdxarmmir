import styles from "./Header.module.css";
import hero from "../../images/heroimage.png"
import rectangle from "../../images/rectangle.png"
import smallcard from "../../images/smallcard.png"
import bigcard from "../../images/bigcard.png"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import line1 from "../../images/line1.png"
import line2 from "../../images/line2.png"
import line3 from "../../images/line3.png"
import vector from "../../images/vector.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
    <div className={styles.section_one}>
        <img src={vector} className={styles.vector} alt="vector"/>
        <div className={styles.header}>
            <div className={styles.menu}>
                <span className={styles.logo}>BrandName</span>
                    <ul className={styles.menu_list}>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
            </div>
                <div className={styles.right_side_menu}>
                    <ul className={styles.right_side_menu_list}>
                        <li>Login</li>
                    </ul>
                    <button>JOIN US <FontAwesomeIcon icon={faArrowRight}/></button>
                    <img src={rectangle} alt="rectangle" className={styles.forimage2}/>
                    <img src={hero} alt="hero" className={styles.forimage}/>
                    <img src={smallcard} alt="smallcard" className={styles.forimage3}/>
                    <img src={bigcard} alt="bigcard" className={styles.forimage4}/>
                </div>
        </div>

            <div className={styles.backGround}>
                    <div className={styles.text1}>Online training</div>
                    <div className={styles.text2}>25K+ STUDENTS <br></br>TRUST US</div>
                    <div className={styles.text3}>We know how large objects will act,
                    <br></br>but things on a small scale</div>
                    <button className={styles.secondbutton}>Join us</button>
                    <button className={styles.thirdbutton}>Learn More</button>
            </div>
        <div className={styles.container}>

                    <div className={styles.box}>
                    <img src={icon1} alt="icon1"/>
                    <p className={styles.textbold}>Evaluation Time</p>
                    <img src={line1} alt="line1"/>
                    <p className={styles.maintext}>The gradual accumulation of<br></br>
                        information about atomic and <br></br>
                        small-scale behaviour...</p>
                    </div>

                    <div className={styles.box}>
                    <img src={icon2} alt="icon2"/>
                    <p className={styles.textbold}>Certified Teacher</p>
                    <img src={line2} alt="line2"/>
                    <p className={styles.maintext}>The gradual accumulation of<br></br>
                        information about atomic and <br></br>
                        small-scale behaviour...</p>
                    </div>
                    <div className={styles.box}>
                    <img src={icon3} alt="icon3"/>
                    <p className={styles.textbold}>Books Liberary</p>
                    <img src={line3} alt="line3"/>
                    <p className={styles.maintext}>The gradual accumulation of <br></br>
                        information about atomic and <br></br>
                        small-scale behaviour...</p>
                    </div>
                </div>


    </div>
    );
}

export default Header;