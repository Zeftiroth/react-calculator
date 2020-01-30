import useKeys from "./utils/useKeys";
import React from "react";
import Keys from "../components/Keys";

const KeyPad = ({ performCalculation }) => {
  const keys = useKeys();
  const { value } = key;

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {keys.map(key => {
          return <Keys data={key} />;
        })}
      </div>
    </div>
  );
};

export default KeyPad;
