import styles from "./Footer.module.css";
import facebook_logo from "../../logos/facebook-logo.png";
import instagram_logo from "../../logos/instagram-logo.png";
import twitter_logo from "../../logos/twitter-logo.png";
import background from "../../pics/footer shape.png";

function Footer() {
    return (
        <div className={styles.footer_section}>
            <div className={styles.info}>
                <div className={styles.first}>
                    <h3>Get In Touch</h3>
                    <p>The quick fox jumps over the lazy dog</p>
                    <div className={styles.logos}>
                        <img src={facebook_logo} alt="facebook" />
                        <img src={instagram_logo} alt="instagram" />
                        <img src={twitter_logo} alt="twitter" />
                    </div>
                </div>
                <div className={styles.second}>
                    <h3>Company Info</h3>
                    <a href="#about">About Us</a>
                    <a href="#career">Career</a>
                    <a href="#hiring">We are hiring</a>
                    <a href="#blog">Blog</a>
                </div>
                <div className={styles.third}>
                    <h3>Features</h3>
                    <a href="#marketing">Business Marketing</a>
                    <a href="#analytics">User Analytic</a>
                    <a href="#livechat">Live Chat</a>
                    <a href="#support">Unlimited Support</a>
                </div>
                <div className={styles.fourth}>
                    <h3>Resources</h3>
                    <a href="#ios">IOS & Android</a>
                    <a href="#demo">Watch a Demo</a>
                    <a href="#customers">Customers</a>
                    <a href="#api">API</a>
                </div>
            </div>
            <div className={styles.footer_background}>
                <img src={background} alt="Footer Background" />
            </div>
            <h6 className={styles.footer_text}>Made with love by Figmaland. All Rights Reserved</h6>
        </div>
    );
}

export default Footer;
