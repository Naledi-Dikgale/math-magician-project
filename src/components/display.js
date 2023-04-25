import React from 'react';

function Display() {
  return (
    <div className="calc-container">
      <div className="answer-box">0</div>
      <button type="button" className="ac">AC</button>
      <button type="button" className="+/-">+/-</button>
      <button type="button" className="modulo">%</button>
      <button type="button" className="orange">/</button>
      <button type="button" className="seven">7</button>
      <button type="button" className="eight">8</button>
      <button type="button" className="nine">9</button>
      <button type="button" className="orange">x</button>
      <button type="button" className="four">4</button>
      <button type="button" className="five">5</button>
      <button type="button" className="six">6</button>
      <button type="button" className="orange">-</button>
      <button type="button" className="one">1</button>
      <button type="button" className="two">2</button>
      <button type="button" className="three">3</button>
      <button type="button" className="orange">+</button>
      <button type="button" className="zero">0</button>
      <button type="button" className="decimal">.</button>
      <button type="button" className="orange">=</button>
    </div>
  );
}

export default Display;
