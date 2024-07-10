import "./Meme.css";
import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
    // Component State That is Managed By the Meme Component
    const [memeImage, setMemeImage] = useState("");

    // Function That Will Fire When Get Meme Button is Clicked
    function getMemeImage(e) {
        // Prevents Form From Refreshing After Submit
        e.preventDefault();

        const memesArray = memesData.data.memes;
        // Create Random Number That is Less Than Length of memesArray
        // To Pick Random URL
        const randomNumber = Math.floor(Math.random() * memesArray.length);

        // Set Meme Image to Random URL
        setMemeImage(memesArray[randomNumber].url);
        console.log('Random URL: ', memeImage)
    }

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
                    <button onClick={getMemeImage}>Save Your Meme</button>
                </div>
                <div id="get-new-meme-button-container">
                    <button>Get New Meme Image</button>
                </div>
            </form>
            <div id="meme-image-container">
                <img src={memeImage} className="meme--image" />
            </div>
        </main>
    )
}
