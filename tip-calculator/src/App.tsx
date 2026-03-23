/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './App.css'

function App() {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);

  const calculateBill = () => {
    
  }

  const increasePeople = () => {
    setPeople(p => p + 1);
    
    calculateBill();
  }

  const decreasePeople = () => {
    if (people === 1) return
    
    setPeople(p => p - 1);
    calculateBill();
  }

  return (
    <div className='wrapper'>
      <div className="container" id='topContainer'>
        <div className="title">Bill total</div>
        <div className="inputContainer">
          <span>$</span>
          <input
            value={bill}
            onChange={calculateBill}
            type='text'
            id='billTotalInput'
            placeholder='0.00'
          />
        </div>
      </div>
      <div className="container">
        <div className="title">Tip</div>
        <div className="inputContainer">
          <span>%</span>
          <input
            value={tip}
            onChange={calculateBill}
            type='text'
            id='tipInput'
            placeholder='10'
          />
        </div>
      </div>
      <div className="container" id="bottom">
        <div className="splitContainer">
          <div className="title">People</div>
          <div className="controls">
            <span className="buttonContainer">
              <button className="splitButton" onClick={increasePeople}>
                <span className="buttonText">+</span>
              </button>
            </span>
            <span className="splitAmount" id="numberOfPeople">{people}</span>
            <span className="buttonContainer">
              <button className="splitButton" onClick={decreasePeople}>
                <span className="buttonText">-</span>
              </button>
            </span>
          </div>
        </div>
        <div className="totalContainer">
          <div className="title">Total per Person</div>
          <div className="total" id="perPersonTotal">${bill}</div>
        </div>
      </div>
    </div>
  )
}

export default App
