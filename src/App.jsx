import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoardComponent";
import Log from "./Components/Log/LogComponent";
import Player from "./Components/Player/PlayerComponent"
import { WINNING_COMBINATIONS } from "./Components/WinningCombinations";

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]/** initial game board used for first render of a component */

function deriveAcctivePlayer(playerMoveList){
  let currentPlayer='X'
      if(playerMoveList.length>0 && playerMoveList[0].player==='X'){
        currentPlayer='O'
      }

      return currentPlayer;

}
let gameBoard=initialGameBoard;
function App() {

  const [playerMoveList,setPlayerMoveList]= useState([]);
  const[activePlayer,setActivePLayer]=useState('X')/* states that helps store information about players and what symbol should be put on board next*/
  const[player1Name,setPlayer1Name]=useState('MAX');
  const[player2Name,setPlayer2Name]=useState('Tom');

 

  for(const move of playerMoveList){
  
  const {square,player} = move;
  const {row,col} = square;
  gameBoard[row][col]=player;
  }

  const activePlayerr=deriveAcctivePlayer(playerMoveList)

  for(const combination of WINNING_COMBINATIONS){
   const firstSymbol= gameBoard[combination[0].row][combination[0].column]
   const secondSymbol=gameBoard[combination[1].row][combination[1].column]
   const thridSymbol=gameBoard[combination[2].row][combination[2].column]
    if(firstSymbol && firstSymbol===secondSymbol && firstSymbol === thridSymbol){

      setTimeout(function() {alert(`${playerMoveList[0].player==='X'?player1Name:player2Name} Win!`)}, 100);
    }

  }

  const handleSelectSquare=(rowIndex,colIndex)=>{ 
   // setActivePLayer((currActivePlayer)=>currActivePlayer=== 'X' ? 'O' : 'X' )/*changing symbol function that is called in GameBoard component to change symbol after clik on a square field */
    setPlayerMoveList(prevList=>{
     const currentPlayer=deriveAcctivePlayer(prevList);

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
          <Player  name={player1Name} symbol='X' handleNameChange={handleNameChange} isActive={activePlayerr==='X'}/>
          <Player  name={player2Name} symbol='O' handleNameChange={handleNameChange} isActive={activePlayerr==='O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activeSymbol={activePlayerr}  board={gameBoard}/>
      </div>  
      <Log turns={playerMoveList} p1Name={player1Name} p2Name={player2Name}/>
    </main>
  )
}

export default App
