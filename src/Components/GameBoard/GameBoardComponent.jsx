import { useState } from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]/** initial game board used for first render of a component */

const GameBoard=({onSelectSquare,activeSymbol})=>{

    const [gameBoard,setGameBoard]=useState(initialGameBoard); /**placing initial game board into state to change values later on */

    const handleSelectedSquare=(rowIndex,collumnIndex)=>{
        setGameBoard((prevGameBoard)=>{
            const updatedGameBoard=[...prevGameBoard.map(innerArray=>([...innerArray]))];/**making copy of actual state before we change it */
            updatedGameBoard[rowIndex][collumnIndex]=activeSymbol;/*changing sybol for the one that should be placed next. Working of state copy instead of original prev state because when we changing state that is array of object we working on refference what can lead to errors later on if we will want to update that state in more places  */
            return updatedGameBoard;
        })
        onSelectSquare();/** Changing active player state in App component */
    }

    return(
    <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
            {row.map((playerSymbol,collumnIndex)=><li key={collumnIndex}><button onClick={()=>handleSelectedSquare(rowIndex,collumnIndex)}>{playerSymbol}</button></li>)}{/** rendering 3x3 grid of nested arrays using map function first one is for main array and the second one for array nested in main array */}
            </ol>
        </li>)}    
    </ol>
    );
}

export default GameBoard;