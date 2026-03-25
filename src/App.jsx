import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import * as d3 from "d3";
import "./App.css";

const data = [4, 8, 15, 16, 23, 42];
console.log("Max:", d3.max(data));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <p>Whats up?</p>
    </>
  );
}

export default App;
