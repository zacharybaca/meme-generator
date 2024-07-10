import "./Meme.css";


export default function Meme(props) {
    console.log('Props: ', props)

    return (
        <main>
            <form id="text-form">
                <div id="form-container">
                    <div id="top-text-container">
                        <input 
                            id="top-text" 
                            name="topText" 
                            placeholder="Top Text" 
                            value={props.meme.topText}
                            onChange={props.handleChange}
                        />
                    </div>
                    
                    <div id="bottom-text-container">
                        <input 
                            id="bottom-text" 
                            name="bottomText" 
                            placeholder="Bottom Text" 
                            value={props.meme.bottomText}
                            onChange={props.handleChange}
                        />
                    </div>
                    
                </div>
                <div id="button-container">
                    <button>Save Your Meme</button>
                </div>
                <div id="get-new-meme-button-container">
                    <button onClick={props.getMeme}>Get New Meme Image</button>
                </div>
            </form>
            <div id="meme-image-container">
                <img src={props.meme.url} className="meme--image" />
                <h2 className="meme-text top">{props.meme.topText}</h2>
                <h2 className="meme-text bottom">{props.meme.bottomText}</h2>
            </div>
        </main>
    )
}
