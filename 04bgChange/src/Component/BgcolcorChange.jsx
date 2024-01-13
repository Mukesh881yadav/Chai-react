import React from "react";

export default function BgcolcorChange({ insideText, onClick, bordercolor }) {
  return (
    <>
      {console.log(bordercolor)}
      <div>
        <button
          className="border-solid border-2 border-indigo-600 mx-4 px-3 my-3"
          onClick={onClick}
        >
          {insideText}
        </button>
      </div>
    </>
  );
}
