import { useState } from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

const GameBoard=({onSelectSquare,activeSymbol})=>{

    const [gameBoard,setGameBoard]=useState(initialGameBoard);

    const handleSelectedSquare=(rowIndex,collumnIndex)=>{
        setGameBoard((prevGameBoard)=>{
            const updatedGameBoard=[...prevGameBoard.map(innerArray=>([...innerArray]))];
            updatedGameBoard[rowIndex][collumnIndex]=activeSymbol;
            return updatedGameBoard;
        })
        onSelectSquare();
    }

    return(
    <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
            {row.map((playerSymbol,collumnIndex)=><li key={collumnIndex}><button onClick={()=>handleSelectedSquare(rowIndex,collumnIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}    
    </ol>
    );
}

export default GameBoard;