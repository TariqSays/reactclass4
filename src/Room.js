import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(false);
   // let [age, setage] = useState(21);
    let [temp, settemp] = useState(72);
    //let Age = 45;
    //console.log("State" ,state);
   // const updateLit = () =>{
        //console.log("Button Clicked")
        //setLit(!isLit)
        //setage(++age);
        //isLit = !isLit;
        //Age = 47;
    //}
//    function decage(){
//        setage(--age);
//    }
//    const incage = () =>{
//   }

    return (
    <div className ={isLit?"lit":"dark"}>
        this is Room Componet : Lit = {isLit ? "Lit":"Dark"}
        <br/>
        <br/>
        
        <button onClick={ ()=>{
            setLit(true)
        }}>ON Button</button>

        <button onClick={ ()=>{
            setLit(false)
        }}>OFF Button</button>
        <br></br>
        the room temperature {temp}
        <br/>
        <br/>
        <button onClick={ ()=>{
           settemp(temp++);
        }}>+</button>
        <button onClick={ ()=>{
            settemp(temp--)
        }}>-</button>
    </div>
  );
}

export default Room;
