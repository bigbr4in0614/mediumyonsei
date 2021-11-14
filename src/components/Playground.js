import Topnav from "./Topnav";
import React from "react";
import "./style.css";
import submit from "./Rocketll";
import { useState } from "react";

function Playground() {
    const [userInput, setUserInput] = useState('')
    const [userOutput, setUserOutput] = useState([null, null])
  return (
    <div>
      <Topnav />
      <div class="contentbox">
        <div class="boxcontainer">
          <textarea class="inputbox" id="input" onChange={(event) => {setUserInput(event.target.value)}}></textarea>
          <button class="submitbutton" id="submit" onClick={() => {submit(userInput).then((val) => {setUserOutput(val); console.log(val)})}}>
            submit
          </button>
          <div class="outputbox" id="output" readOnly>{userOutput[1]?.map((val,i) => <span style={ {color: userOutput[0][0][i]?.label==="offensive" ? "orange" : userOutput[0][0][i]?.label==="hate" ? "red" : "inherit"  } }>{val} / </span> )}</div>
        </div>
      </div>
    </div>
  );
}

export default Playground;