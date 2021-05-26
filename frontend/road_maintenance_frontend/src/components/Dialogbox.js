import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [priority, setPriority] = React.useState("low");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/markers/postmarker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
        priority: priority,
        address: "address not defined",
      }),
    })
      .then((res) => {
        if (res.status != 201) {
          console.log("Could not post marker");
          throw new Error("Could not create a new marker!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log("Created sucessfully");
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);
    console.log("Priority: ", priority);
  }, [latitude, longitude, priority]);
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + New Marker
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new marker</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the marker details best to your information. Refrain from
            adding false alerts.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Latitude"
            type="string"
            onChange={(e) => {
              setLatitude(e.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Longitude"
            type="string"
            onChange={(e) => {
              setLongitude(e.target.value);
            }}
            fullWidth
          />
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
