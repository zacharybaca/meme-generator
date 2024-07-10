import "./Footer.css";
import logo from "../components/logo-image.png";
import schoolLogo from "../components/vschool-logo.avif";

export default function Footer() {
    return (
        <footer>
            <div id="footer-logo-container">
                <img src={logo} id="footer-logo"/>
            </div>
            <div id="v-school-logo-container">
                <img src={schoolLogo} id="v-school-logo-img"/>
            </div>
            <div id="footer-project-info-container">
                <h4>React Course-Project 3</h4>
            </div>
        </footer>
    )
}
