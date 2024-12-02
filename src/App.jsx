import { useState } from "react"

import Player from "./Components/Player/PlayerComponent"
function App() {
  const[player1Name,setPlayer1Name]=useState('MAX');
  const[player2Name,setPlayer2Name]=useState('MAX');

  const handleNameChange=(name1,name2)=>{
      if(name1){
        setPlayer1Name(name1)
      }
      else{
        setPlayer2Name(name2)
      }
  }
  return (
    <main>
      <div id="game-container">
        <ol id='players'>
          <Player  name={player1Name} symbol='X' handleNameChange={handleNameChange}>Player1</Player>{/*Adding player component including span or input and button that turns Edit mode add Player1 children prop to recognize in whitch component changes occure */}
          <Player  name={player2Name} symbol='O' handleNameChange={handleNameChange}>Player2</Player>{}
        </ol>

        Game Board
      </div>  
      LOG
    </main>
  )
}

export default App
