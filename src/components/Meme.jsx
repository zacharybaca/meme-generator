import "./Meme.css";

export default function Meme() {
    return (
        <main>
            <form id="text-form">
                <div id="form-container">
                    <div id="top-text-container">
                        <label for="top-text">Top Text</label>
                        <input id="top-text" name="top-text"/>
                    </div>
                    
                    <div id="bottom-text-container">
                        <label for="bottom-text">Bottom Text</label>
                        <input id="bottom-text" name="bottom-text"/>
                    </div>
                    
                </div>
                <div id="button-container">
                    <button>Create New Meme</button>
                </div>
            </form>
        </main>
    )
}
