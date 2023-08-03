import React, { useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const SnackExample = () => {
  const snack = useSnack();
  const [message, setMessage] = useState("");
  const FireSnack = () => {
    snack("success", message);
    setMessage("");
  };
  return (
    // <div style={{position:"fixed", right:"50%", top:"50%"}}>
    //    <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} />
    //    <button onClick={FireSnack}>click</button>
    // </div>
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
      }}
    >
      <InputBase
        onChange={(e) => setMessage(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Snack Message"
        inputProps={{ "aria-label": "search google maps" }}
        value={message}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={FireSnack}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default SnackExample;
