const Log=({turns})=>{
    
    
    
    return (<ol id='log'> 
    {turns.map(turn=><li key={`${turn.square.row}${turn.square.col} `}>{turn.player} Selected {turn.square.row}, {turn.square.col}</li>)};
    </ol>)//Displayin player movelist under game board 
}

export default Log;