import React from "react";
export default function Cardone({ profileName, data }) {
  return (
    <>
      <h1>{profileName || "visit this"}</h1>
      <p>{data}</p>
    </>
  );
}
