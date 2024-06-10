import im from "../asset/face.webp";
import facebook from "../asset/facebook-icon.svg";
import instagram from "../asset/instagram-icon.svg";
import twitter from "../asset/twitter-icon.svg";
import github from "../asset/github-icon.svg";
import email from "../asset/email-icon.svg";
import linkedin from "../asset/linkedin-icon.svg";
import "../style/card.css";

export default function Card() {
    return (
        <div className="card">
            <img src={im} alt="Head shot" className="im"/>
            <div className="card-content">
                <h2>Mohamed El-Deeb</h2>
                <h4>Software Developer</h4>
                <h5><a href="https://mhdeeb.github.io">mhdeeb.github.io</a></h5>
                <div className="connect-container">
                    <a href="https://mail.google.com/mail/?view=cm&to=s-mohamed.eldeeb@zewaicity.edu.eg" target="_blank">
                        <button className="mail-button">
                            <img src={email} alt="Email icon"/>
                            Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-el-deeb-093235194" target="_blank">
                        <button className="linkedin-button">
                            <img src={linkedin} alt="LinkedIn icon"/>
                            LinkedIn
                        </button>
                    </a>
                </div>
                <div className="card-text">
                    <h3>About</h3>
                    <p>I have 4+ years of general programming experience ranging from desktop apps and Web servers to computer graphics and embedded systems.</p>
                    <h3>Interests</h3>
                    <p>Passionate about programming and problem solving. Loves philosophy and studying human psychology. Enjoys anime and video games.</p>
                </div>
            </div>
            <div className="card-footer">
                <a href="https://x.com/xmat2000" target="_blank"><img src={twitter} alt="Twitter icon" /></a>
                <a href="https://fb.com/mohamedhussein6a" target="_blank"><img src={facebook} alt="Facebook icon" /></a>
                <a href="https://www.instagram.com/mohamedhussein335/" target="_blank"><img src={instagram} alt="Instagram icon" /></a>
                <a href="https://github.com/mhdeeb" target="_blank"><img src={github} alt="GitHub icon" /></a>
            </div>
        </div>
    );
}