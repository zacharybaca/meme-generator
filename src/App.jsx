import './App.css'
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";
import SavedMemes from "./components/SavedMemes";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Set-up State for Getting Single Meme
  const [meme, setMeme] = React.useState({
    id: uuidv4(),
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg" 
  });

  // Set-up State for Getting all Memes from API
  const [allMemes, setAllMemes] = React.useState();

  // Set-up State for Saved Memes
  const [savedMemes, setSavedMemes] = React.useState([]);

  // Function That Will Save Memes To savedMemes State
  function saveMeme(event) {
    event.preventDefault();

    setSavedMemes(prevState => ([
      ...prevState,
      {
        id: meme.id,
        topText: meme.topText,
        bottomText: meme.bottomText,
        url: meme.url
      }
    ]))
    
    setMeme(prevState => ({
      ...prevState,
      id: uuidv4(),
      topText: "",
      bottomText: ""
    }))
  }
  
  // Function That Will Delete a Meme
  function deleteMeme(memeId) {
    console.log('MemeID: ', memeId)
    let updatedMemeList = savedMemes.filter((meme) => meme.id !== memeId);
    setSavedMemes(updatedMemeList);
  }

  // Function That Will Find a Meme, If It Exists
  function getSavedMeme(memeId) {
    let found = savedMemes.find((meme) => meme.id === memeId);

    if (found) {
      setMeme({
        id: found.id,
        topText: found.topText,
        bottomText: found.bottomText,
        url: found.url
      })
      deleteMeme(found.id);
    }
  }

  // Get Memes From API and Save to allMemes
  React.useEffect(() => {
    async function getMemes ()  {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const data = await response.json()
      setAllMemes(data.data.memes)
    }

    getMemes();
  }, [])

  // Function That Will Fire When Get Meme Button is Clicked
  function getMemeImage(event) {
    event.preventDefault();
    // Create Random Number That is Less Than Length of memesArray
    // To Pick Random URL
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    // Get Random Meme Image
    const memeImg = allMemes[randomNumber].url;
    
    // Set Meme Image to Random URL
    setMeme(prevState => ({
      ...prevState,
      url: memeImg
    }));
  
}

// Function to Incorporate Input State Within React
function handleChange(event) {
  const {name, value} = event.target;

  event.preventDefault();

  setMeme(prevState => ({
    ...prevState,
    [name]: value
  }))
}

  return (
    <div id="app-container">
      <Header />
      <Meme 
        getMeme={getMemeImage} 
        meme={meme} 
        save={saveMeme}
        handleChange={handleChange}
      />
      {savedMemes.length !== 0 && <h1 id="saved-heading">Saved Memes</h1>}
      <SavedMemes 
        saved={savedMemes}
        delete={deleteMeme}
        get={getSavedMeme}
      />
      <Footer />
    </div>
  )
}

export default App
