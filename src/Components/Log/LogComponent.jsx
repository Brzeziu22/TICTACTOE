const Log=({turns,p1Name,p2Name})=>{
    
    
    
    return (<ol id='log'> 
    {turns.map(turn=><li key={`${turn.square.row}${turn.square.col} `}>{turn.player==='X'?p1Name:p2Name} Selected {turn.square.row}, {turn.square.col}</li>)};
    </ol>)//Displayin player movelist under game board 
}

export default Log;