import { Children, useState } from "react";
const Player=({name,symbol,handleNameChange,children})=>{
    const [editOn,setEditOn]=useState(false);
    const [inputValue,setInputValue]=useState('');

{/* Creating handle click for both types of buttons */}
    const handleEditButtonClick=()=>{{/* Changing from edit to save button */}
        setEditOn(!editOn);
    
    }
    const handleSaveButtonClick=()=>{{/* Checking in whitch component changes occure and change name of one player depending on component we make changes*/}
      
        setEditOn(!editOn);
        if(children=='Player1'){
        handleNameChange(inputValue,false);}
        if(children=='Player2'){
            handleNameChange(false , inputValue);
        }
    }
    

    return(
        <li>
            <span className="player">
              {editOn?<input value={inputValue} onChange={()=>{setInputValue(event.target.value)}} ></input> :<span className="player-name">{name}</span>}{/*Using value? true:false opperator to make changes on button click */}
              <span className="player-symbol">{symbol}</span>
            </span>
            {editOn?<button onClick={handleSaveButtonClick}>Save</button>:<button onClick={handleEditButtonClick}>Edit</button>}
        </li>)
          }

export default Player;