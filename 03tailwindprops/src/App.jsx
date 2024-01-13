import { useState } from "react";
import Cardone from "./Components/Cardone";
import "./index.css";
function App() {
  let myobj = {
    username: "mukesh",
    age: "10",
  };

  let newarray = [1, 2, 3];

  // we can  pass array and object through any component
  return (
    <>
      {/* <h1 className="bg-green-400 my-3">tailwind with react</h1>
      <Card channel="mukesh Yadv" someobject={myobj} myarray={newarray} /> */}

      <h1>tailwind with react</h1>
      <Cardone data="1 finance" />
      <Cardone profileName="Yadav Mukesh" data="fiance 1" />
    </>
  );
}

export default App;
