import { useState } from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]/** initial game board used for first render of a component */

const GameBoard=({onSelectSquare,activeSymbol,moveList})=>{

    //const [gameBoard,setGameBoard]=useState(initialGameBoard); /**placing initial game board into state to change values later on */
     let gameBoard=initialGameBoard;
        console.log(moveList)
     for(const move of moveList){
        
        const {square,player} = move;
        const {row,col} = square;
        gameBoard[row][col]=player;
     }
   //generating game board based on players move list 

    return(
    <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
            {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}{/** rendering 3x3 grid of nested arrays using map function first one is for main array and the second one for array nested in main array */}
            </ol>
        </li>)}    
    </ol>
    );
}

export default GameBoard;