import React from "react";
import logo from './{'/logo2.gpj'}';
import './App.css';







function App() {
  
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
  <li>{number}</li>
);
  

  return (
    <div>
      <header>
      <img src={logo} width={100} height={100} />
      </header>
      <body>
      Holidays
      </body>
      <button>
        Refresh data
        </button>
      <ul>{listItems}</ul>
    </div>

  );
}

export default App;
