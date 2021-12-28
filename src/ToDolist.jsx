import React, { useState } from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const ToDOlist=(props)=>
{
    const [line,setline] = useState(false);
    const cutIt =()=>
    {
        setline(true);
    };
    return (
    <>
    <div className="todo_style">
    <table>
    <tr><td>
    <span onClick={cutIt}><HighlightOffIcon className="deleteIcon"/></span></td>
    <td>
    <li style={{textDecoration:line ? "line-through" : "none"}}>{props.text}</li>
    </td></tr>
    </table>
    </div>
    </>
        );
};






export default ToDOlist;