import './App.css'
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  // Set-up State for Getting Single Meme
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: ""
  });

  // Set-up State for Getting all Memes from API
  const [allMemes, setAllMemes] = React.useState([]);

  // Function That Will Fire When Get Meme Button is Clicked
  function getMemeImage(e) {
    // Prevents Form From Refreshing After Submit
    e.preventDefault();
    // Create Random Number That is Less Than Length of memesArray
    // To Pick Random URL
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    // Set Meme Image to Random URL
    setMeme(allMemes[randomNumber].url);
    console.log('Random URL: ', meme)
}

  return (
    <div id="app-container">
      <Header />
      <Meme getMeme={getMemeImage} meme={meme}/>
    </div>
  )
}

export default App
