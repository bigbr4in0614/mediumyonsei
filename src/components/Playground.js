import Topnav from "./Topnav";
import React from "react";
import "./style.css";
import submit from "./Rocketll";
import { useState } from "react";

function Playground() {
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState([null, null]);
  return (
    <div>
      <Topnav />
      <div class="contentbox">
        <h1>
          Playground
        </h1>
        <p className="playinstruction">
          두 단어 이상의 문장을 입력하고 Submit 버튼을 누르면 문장 단위로 
          <span className="hatelabel"> 혐오 표현</span>{" / "}<span className="offlabel">공격적 표현</span>{" / "}일반적 표현으로
          구별되어 아래의 박스에 표시됩니다.
        </p>
        <div class="boxcontainer">
          <textarea
            class="inputbox"
            id="input"
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          >
          </textarea>
          <button
            class="submitbutton"
            id="submit"
            onClick={() => {
              submit(userInput).then((val) => {
                setUserOutput(val);
                console.log(val);
              });
            }}
          >
            submit
          </button>
          <div class="outputbox" id="output" readOnly>
            {userOutput[1]?.map((val, i) => (
              <>
              <span
                style={{
                  color:
                    userOutput[0][0][i]?.label === "offensive"
                      ? "orange"
                      : userOutput[0][0][i]?.label === "hate"
                      ? "red"
                      : "inherit",
                }}
              >
                {val}
              </span> 
              {i != userOutput[1].length-1 && <span> / </span>}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;
