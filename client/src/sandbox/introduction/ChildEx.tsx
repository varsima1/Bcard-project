import React from "react";
import Button from "@mui/material/Button";

type Props = {
  changeColor: (backgroundColor: string) => void;
  backgroundColor: string;
};

const ChildEx: React.FC<Props> = ({ changeColor, backgroundColor }) => {
  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => changeColor(backgroundColor)}
      >
        click me
      </Button>
    </>
  );
};

export default ChildEx;
