import { useState } from "react";
import BgcolcorChange from "./Component/BgcolcorChange";
import "./App.css";

function App() {
  const [green, setGreen] = useState("#ffffff");

  function handleButtonClick(color) {
    console.log(color);
    setGreen(color);
  }

  const colors = [
    {
      id: 0,
      color: "#ff0000",
      name: "red",
    },
    {
      id: 1,
      color: "#00ff00",
      name: "yellow",
    },
    {
      id: 2,
      color: "#0000ff",
      name: "blue",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundColor: green }}
        className="	min-height: min-content;"
      >
        {colors.map((ele, i) => (
          <BgcolcorChange
            key={i}
            onClick={() => handleButtonClick(ele.color)}
            insideText={ele.name}
            bordercolor={ele.id === i}
          />
        ))}

        {/* <BgcolcorChange
          onClick={() => handleButtonClick("#00ff00")}
          insideText="yellow"
        />
        <BgcolcorChange
          onClick={() => handleButtonClick("#0000ff")}
          insideText="red"
        /> */}
      </div>
    </>
  );
}

export default App;
