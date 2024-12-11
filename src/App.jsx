import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoardComponent";

import Player from "./Components/Player/PlayerComponent"
function App() {
  const[activePlayer,setActivePLayer]=useState('X')
  const[player1Name,setPlayer1Name]=useState('MAX');
  const[player2Name,setPlayer2Name]=useState('Tom');

  const handleSelectSquare=()=>{
    setActivePLayer((currActivePlayer)=>currActivePlayer=== 'X' ? 'O' : 'X' )
  }


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
