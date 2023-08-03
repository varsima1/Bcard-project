import React, { useState } from "react";
import ChildEx from "./ChildEx";

const FatherEx = () => {
  const design = {
    backgroundColor: "red",
    width: "300px",
    height: "300px",
    margin: "auto",
  };
  const [backgroundColor, newColor] = useState("green");

  return (
    <>
      <div style={design} className="center">
        <ChildEx
          changeColor={() =>
            newColor((design.backgroundColor = backgroundColor))
          }
          backgroundColor={"blue"}
        />
      </div>
    </>
  );
};

export default FatherEx;
