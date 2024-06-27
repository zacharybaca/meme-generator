import "./Header.css";
import logo from "../components/logo-image.png";

export default function Header() {
    return (
        <header>
            <div id="logo-container">
                <img src={logo} id="logo"/>
                <h1>Meme Generator</h1>
            </div>
            
        </header>
    )
}
