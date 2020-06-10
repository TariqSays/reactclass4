import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setage] = useState(21);
    //let Age = 45;
    //console.log("State" ,state);
    const updateLit = () =>{
        //console.log("Button Clicked")
        //setLit(!isLit)
        //setage(++age);
        //isLit = !isLit;
        //Age = 47;
    }
//    function decage(){
//        setage(--age);
//    }
//    const incage = () =>{
//   }

    return (
    <div className ={isLit?"lit":"dark"}>
        This is Room Componet : Lit = {isLit ? "Lit":"Dark"}
        <br/>
        Age : {age}
        <br/>
        
        <button onClick={ ()=>{
            setLit(!isLit)
        }}>Toggle Button</button>

        <br/>
    
        <button onClick={ ()=>{
                setage(age++);
        }}>Decrease Age</button>
    
    </div>
  );
}

export default Room;
