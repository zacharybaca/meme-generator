import "./Meme.css";
import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme(props) {
    // Component State That is Managed By the Meme Component
    const [memeImage, setMemeImage] = useState("");

    

    return (
        <main>
            <form id="text-form">
                <div id="form-container">
                    <div id="top-text-container">
                        <input id="top-text" name="top-text" placeholder="Top Text"/>
                    </div>
                    
                    <div id="bottom-text-container">
                        <input id="bottom-text" name="bottom-text" placeholder="Bottom Text"/>
                    </div>
                    
                </div>
                <div id="button-container">
                    <button>Save Your Meme</button>
                </div>
                <div id="get-new-meme-button-container">
                    <button onClick={props.getMemeImage}>Get New Meme Image</button>
                </div>
            </form>
            <div id="meme-image-container">
                <img src={props.meme.url} className="meme--image" />
            </div>
        </main>
    )
}
