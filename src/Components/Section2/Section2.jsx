import styles from "./Section2.module.css"
import heroes from "../../images/Heroes.png"
import line from "../../images/line.png"
import boximage from "../../images/boximage.png"
import largebox from "../../images/largebox.png"
import square from "../../images/square.png"
import smallrectangle from "../../images/smallrectangle.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Section2(){
    return (
<div className={styles.section_two}>
    <div className={styles.forheroes}>
         <img src={heroes} className={styles.heroes} alt="heroes"/>
         <img src={boximage} className={styles.boximage} alt="boximage"/>
         <img src={largebox} className={styles.largebox} alt="largebox"/>
         <img src={square} className={styles.square} alt="square"/>
         <img src={smallrectangle} className={styles.smallrectangle} alt="smallrectangle"/>
    </div>
    
        <div className={styles.forP}>
            <p className={styles.p1}>Make online education<br></br>
            accessible</p>
            <img src={line} className={styles.line} alt="line"/>
            <p className={styles.p2}>Problems trying to resolve the conflict between<br></br> 
            the two major realms of Classical physics:<br></br> 
            Newtonian mechanics </p>
            <li className={styles.button}>Learn More<FontAwesomeIcon icon={faAngleRight} /></li>
        </div>
</div>
    )
}

export default Section2;