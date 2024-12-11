const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

const GameBoard=()=>{
    return(
    <ol id='game-board'>
        {initialGameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
            {row.map((playerSymbol,collumnIndex)=><li key={collumnIndex}><button>{playerSymbol}</button></li>)}
            </ol>
        </li>)}    
    </ol>
    );
}

export default GameBoard;