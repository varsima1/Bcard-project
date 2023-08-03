import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import ROUTES from "../../routes/routesModel";

export default function FormDialogBizNumber() {
  const [open, setOpen] = React.useState(false);
  const [bizNumber, setBizNumber] = useState("");

  const { user } = useUser();
  const { cardId } = useParams();
  const { handleGetCard, handleChangeBizNumber } = useCards();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = async () => {
    await handleChangeBizNumber(cardId, bizNumber);
    handleClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBizNumber(event.target.value);
  };

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Business Number
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Business number must be between 1,000,000 to 9,999,999 and consists
            only digits
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Business Number"
            type="email"
            fullWidth
            variant="standard"
            value={bizNumber}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubscribe}
            disabled={bizNumber.length < 7 || bizNumber.length > 7}
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
