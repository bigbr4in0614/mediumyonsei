import './style.css';
import mainlogo from '../assets/logo/big/white.png';

function Topnav() {
  return (
    <div className="topnav">
      <img class="logo" src={mainlogo} />
        <div class="navgroup">
          <a class="active"> About </a>
          <a href="option.html"> Instruction</a>
          <a href="playground.html">Playground</a>
          <a href="https://github.com/bigbr4in0614/hate-speech-detection" target="_blank">Github</a>
      </div>
    </div>
  );
}

export default Topnav;