import "./Meme.css";
import { useState } from "react";

export default function Meme() {
    // Component State That is Managed By the Meme Component
    const [memeImage, setMemeImage] = useState("");

    // Function That Will Fire When Get Meme Button is Clicked
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random());
    }

    return (
        <main>
            <form id="text-form">
                <div id="form-container">
                    <div id="top-text-container">
                        <label for="top-text">Top Text</label>
                        <input id="top-text" name="top-text" placeholder="Enter Text For Top of Meme"/>
                    </div>
                    
                    <div id="bottom-text-container">
                        <label for="bottom-text">Bottom Text</label>
                        <input id="bottom-text" name="bottom-text" placeholder="Enter Text For Bottom of Meme"/>
                    </div>
                    
                </div>
                <div id="button-container">
                    <button>Create New Meme</button>
                </div>
            </form>
            /*<img src="#" />*/
        </main>
    )
}
