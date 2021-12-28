import React, { useState } from "react";
import ToDOlist from "./ToDolist";


const App1 = ()=>{

  const [inputList,setInputList]= useState("");
  const [item,setItem]=useState([]);
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };
  const listofItem=()=>
  {
    if(setInputList==null)
    {
    alert ("sorry");
    }
     setItem((olditem)=>{
       return[...olditem,inputList];
     });
     setInputList('');
  };

  
  return(
      <>
      <div className="main_div">
          <div className="center_div">
           <br/>
           <h1>ToDo List</h1>
           <br/>
           <input type="text" placeholder="Add Items" onChange={itemEvent}  value={inputList}>
           </input>
           <button onClick={listofItem}>+</button>
           <ol>
             {item.map((itemval) => {
               return <ToDOlist text={itemval}/>; 
             })}
           </ol>
          </div>
      </div>
     </>
   );
};
export default App1;
