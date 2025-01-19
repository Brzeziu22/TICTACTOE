import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoardComponent";
import Log from "./Components/Log/LogComponent";
import Player from "./Components/Player/PlayerComponent"
function App() {

  const [playerMoveList,setPlayerMoveList]= useState([]);
  const[activePlayer,setActivePLayer]=useState('X')/* states that helps store information about players and what symbol should be put on board next*/
  const[player1Name,setPlayer1Name]=useState('MAX');
  const[player2Name,setPlayer2Name]=useState('Tom');

  const handleSelectSquare=(rowIndex,colIndex)=>{ 
    setActivePLayer((currActivePlayer)=>currActivePlayer=== 'X' ? 'O' : 'X' )/*changing symbol function that is called in GameBoard component to change symbol after clik on a square field */
    setPlayerMoveList(prevList=>{
      let currentPlayer='X'
      if(prevList.length>0 && prevList[0].player==='X'){
        currentPlayer='O'
      }

      const updatedMoveList=[{square:{row:rowIndex, col:colIndex} ,player:currentPlayer}, ...prevList];


      return updatedMoveList;
    })
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

        <GameBoard onSelectSquare={handleSelectSquare} activeSymbol={activePlayer}  moveList={playerMoveList}/>
      </div>  
      <Log turns={playerMoveList}/>
    </main>
  )
}

export default App
