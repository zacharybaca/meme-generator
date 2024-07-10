import "./Meme.css";


export default function Meme(props) {
    
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
