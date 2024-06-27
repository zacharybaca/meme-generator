import "./Header.css";
import logo from "../components/logo-image.png";

export default function Header() {
    return (
        <header>
            <div id="logo-container">
                <img src={logo} id="logo"/>
            </div>
            <div id="project-info-container">
                <h4>React Course-Project 3</h4>
            </div>
        </header>
    )
}
