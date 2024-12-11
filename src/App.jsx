import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoardComponent";

import Player from "./Components/Player/PlayerComponent"
function App() {
  const[activePlayer,setActivePLayer]=useState('X')/* states that helps store information about players and what symbol should be put on board next*/
  const[player1Name,setPlayer1Name]=useState('MAX');
  const[player2Name,setPlayer2Name]=useState('Tom');

  const handleSelectSquare=()=>{
    setActivePLayer((currActivePlayer)=>currActivePlayer=== 'X' ? 'O' : 'X' )/*changing symbol function that is called in GameBoard component to change symbol after clik on a square field */
  }


  const handleNameChange=(name1,name2)=>{/*function that recognize whitch player name should be changed based on given arguments in Player component */
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
        <ol id='players' className="highlight-player">
          <Player  name={player1Name} symbol='X' handleNameChange={handleNameChange} isActive={activePlayer==='X'}/>
          <Player  name={player2Name} symbol='O' handleNameChange={handleNameChange} isActive={activePlayer==='O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activeSymbol={activePlayer}/>
      </div>  
      LOG
    </main>
  )
}

export default App
