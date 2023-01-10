import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [romaNum, setRomaNum] = useState("");
  const [err, setErr] = useState();
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  useEffect(() => {
    setErr("");
  }, [romaNum]);

  const convertNumber = (e) => {
    let str = "";
    let num = e.target.value;
    if (num > 0 && num <= 3000) {
      for (let i in roman) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
      }
      setRomaNum(str);
    } else {
      setRomaNum("");
      setErr("Your number must be integer and lower than 3000.");
    }
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <h1>Decimal to ROMAN</h1>
        <p>Enter your decimal number and magic will happens</p>
        <div className="content">
          <input
            type="text"
            placeholder="Enter your decimal number"
            onChange={convertNumber}
          />
          <p>{err}</p>
          <p>{romaNum}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
