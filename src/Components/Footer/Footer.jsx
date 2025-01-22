import styles from "./Footer.module.css";
import facebook_logo from "../../logos/facebook-logo.png";
import instagram_logo from "../../logos/instagram-logo.png";
import twitter_logo from "../../logos/twitter-logo.png";
import background from "../../pics/footer shape.png";

function Footer(){
    return (<div className={styles.footer_section}>
        <div className={styles.info}>
            <div className={styles.first}>
                <h3>Get In Touch</h3>
                <p>the quick fox jumps over the lazy dog</p>
                <div className={styles.logos}>
                    <img src={facebook_logo} alt="facebook" />
                    <img src={instagram_logo} alt="instagram" />
                    <img src={twitter_logo} alt="twitter" />
                </div>
            </div>
            <div className={styles.second}>
                <h3>Company info</h3>
                <a href="http://facebook.com">About Us</a>
                <a href="http://facebook.com">Carrier</a>
                <a href="http://facebook.com">We are hiring</a>
                <a href="http://facebook.com">Blog</a>
            </div>
            <div className={styles.third}>
                <h3>Features</h3>
                <a href="http://facebook.com">Business Marketing</a>
                <a href="http://facebook.com">User Analytic</a>
                <a href="http://facebook.com">Live Chat</a>
                <a href="http://facebook.com">Unlimited Support</a>
            </div>
            <div className={styles.fourth}>
                <h3>Resources</h3>
                <a href="http://facebook.com">IOS & Android</a>
                <a href="http://facebook.com">Watch a Demo</a>
                <a href="http://facebook.com">Customers</a>
                <a href="http://facebook.com">API</a>
            </div>
        </div>
        <div className={styles.footer_background}>
            <img src={background} alt="footer img" />
        </div>
        <h6 className={styles.footer_text}>Made With Love By Figmaland All Right Reserved</h6>
    </div>)
}

export default Footer;