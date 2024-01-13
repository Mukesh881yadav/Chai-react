import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLegth] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghiklmnopqrstwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#%$%&-_+=[]{}";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, password, passwordgenrator]);

  return (
    <>
      <h1>password genrator</h1>
      <div>Test</div>
    </>
  );
}

export default App;
