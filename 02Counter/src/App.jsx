import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15); // [0]=variable and [1]=function(method)

  const addvalue = () => {
    // counter = counter + 1;
    setCounter((prevCounter) => {
      prevCounter + 1;
    });

    setCounter((prevCounter) => {
      prevCounter + 1;
    });

    setCounter((prevCounter) => {
      prevCounter + 1;
    });

    setCounter((prevCounter) => {
      prevCounter + 1;
    });

    setCounter((prevCounter) => {
      prevCounter + 1;
    });
  };
  const removevalue = () => {
    setCounter(counter - 1);
    if (counter < 0) {
      setCounter(-10);
    }
  };
  return (
    <>
      <h1>chai and react</h1>
      <h2>counetr value {counter}</h2>

      <button onClick={addvalue} disabled={counter > 5}>
        add Value {counter}
      </button>
      <br />
      <button onClick={removevalue} disabled={counter <= 0}>
        remove value {counter}
      </button>
      <p>footer{counter}</p>
    </>
  );
}

export default App;
