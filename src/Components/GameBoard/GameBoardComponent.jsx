const GameBoard=({onSelectSquare,board})=>{

    return(
    <ol id='game-board'>
        {board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
            {row.map((playerSymbol,colIndex)=><li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                </li>)}{/** rendering 3x3 grid of nested arrays using map function first one is for main array and the second one for array nested in main array */}
            </ol>
        </li>)}    
    </ol>
    );
}

export default GameBoard;