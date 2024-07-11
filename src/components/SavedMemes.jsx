/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./SavedMemes.css";
import { v4 as uuidv4 } from "uuid";

export default function SavedMemes(props) {
    return (
        <div id="saved-memes-container">
            {props.saved.length === 0 ? <div id="no-saved-memes">No Saved Memes</div> : 
            
            <ul id="saved-memes-list">
                {props.saved.map((meme) => {
                    return (
                        <li key={uuidv4()} className="meme-item">
                            <div id="saved-meme-image-container">
                                <img src={meme.url} className="saved--meme--image" />
                                <h2 className="saved-meme-text save-top">{meme.topText}</h2>
                                <h2 className="saved-meme-text save-bottom">{meme.bottomText}</h2>
                            </div>
                            <div id="action-buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            
            }
        </div>
    )
}