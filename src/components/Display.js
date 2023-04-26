import React, { useState } from 'react';
import calculate from '../logic/calculate';
// import Quotes from './quotes';

function Display() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,

  });

  const handleClick = (e) => {
    const newClick = calculate(state, e);
    setState(newClick);
  };
  return (
    <div className="calc-container">
      <div className="answer-box">
        {
        state.next || state.total || '0'
      }
      </div>
      <button type="button" onClick={() => handleClick('AC')} className="ac">AC</button>
      <button type="button" onClick={() => handleClick('+/-')} className="+/-">+/-</button>
      <button type="button" onClick={() => handleClick('%')} className="modulo">%</button>
      <button type="button" onClick={() => handleClick('÷')} className="orange">÷</button>
      <button type="button" onClick={() => handleClick('7')} className="seven">7</button>
      <button type="button" onClick={() => handleClick('8')} className="eight">8</button>
      <button type="button" onClick={() => handleClick('9')} className="nine">9</button>
      <button type="button" onClick={() => handleClick('x')} className="orange">x</button>
      <button type="button" onClick={() => handleClick('4')} className="four">4</button>
      <button type="button" onClick={() => handleClick('5')} className="five">5</button>
      <button type="button" onClick={() => handleClick('6')} className="six">6</button>
      <button type="button" onClick={() => handleClick('-')} className="orange">-</button>
      <button type="button" onClick={() => handleClick('1')} className="one">1</button>
      <button type="button" onClick={() => handleClick('2')} className="two">2</button>
      <button type="button" onClick={() => handleClick('3')} className="three">3</button>
      <button type="button" onClick={() => handleClick('+')} className="orange">+</button>
      <button type="button" onClick={() => handleClick('0')} className="zero">0</button>
      <button type="button" onClick={() => handleClick('.')} className="decimal">.</button>
      <button type="button" onClick={() => handleClick('=')} className="orange">=</button>
    </div>
  );
}

export default Display;
