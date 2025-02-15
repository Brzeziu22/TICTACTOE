import { Children, useState } from "react";
const Player=({name,symbol,handleNameChange,isActive})=>{
    const [editOn,setEditOn]=useState(false);
    const [inputValue,setInputValue]=useState(name);
    
{/* Creating handle click for both types of buttons */}
    const handleEditButtonClick=()=>{{/* Changing from edit to save button */}
        setEditOn((editing)=>!editing);
    
    }
    const handleSaveButtonClick=()=>{{/* Checking in whitch component changes occure and change name of one player depending on component we make changes*/}
      
        setEditOn(!editOn);
        if(symbol=='X'){
        handleNameChange(inputValue,false);}
        if(symbol=='O'){
            handleNameChange(false , inputValue);/*passing to function either first or second argument to change name of good player*/
        }
    }
    const editButton=<button onClick={handleEditButtonClick}>Edit</button>;{/*Creating variables for reneder elements making code clear */}
    const saveButton=<button onClick={handleSaveButtonClick}>Save</button>;
    const nameTag=<span className="player-name">{name}</span>;
    const inputTag=<input value={inputValue} onChange={()=>{setInputValue(event.target.value)}} ></input>;

    return(
        <li className={isActive ? 'active': undefined}>
            <span className="player">
              {editOn? inputTag  :nameTag}{/*Using value? true:false opperator to make changes on button click */}
              <span className="player-symbol">{symbol}</span>
            </span>
            {editOn?saveButton:editButton}
        </li>)
          }

export default Player;