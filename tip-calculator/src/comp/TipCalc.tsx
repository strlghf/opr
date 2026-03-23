import { useState } from "react";

export function TipCalc () {
  const [billInput, setBillInput] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [people, setPeople] = useState(1);

  const calculateBill = () => {
    if (!billInput || !tipInput) return;

    const bill = +billInput;
    const tipPercentange = +tipInput / 100;
    const tipAmount = bill * tipPercentange;
    const total = bill + tipAmount;
    const perPersonTotal = total / people;

    return perPersonTotal.toFixed(2);
  }

  const increasePeople = () => {
    setPeople(p => p + 1);
  }

  const decreasePeople = () => {
    if (people === 1) return

    setPeople(p => p - 1);
  }

  const p = calculateBill();

  return (
    <div className="wrapper">
      <div className="container" id="topContainer">
        <div className="title">Bill total</div>
        <div className="inputContainer">
          <span>$</span>
          <input
            value={billInput}
            onChange={e => setBillInput(e.target.value)}
            type="text"
            id="billTotalInput"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="container">
        <div className="title">Tip</div>
        <div className="inputContainer">
          <span>%</span>
          <input
            value={tipInput}
            onChange={e => setTipInput(e.target.value)}
            type="text"
            id="tipInput"
            placeholder="10"
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
          <div className="total" id="perPersonTotal">${p ? p : 0}</div>
        </div>
      </div>
    </div>
  )
}