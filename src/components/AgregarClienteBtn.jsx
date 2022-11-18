import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

export const AgregarClienteBtn = ({ setOpenModal }) => {
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="right-align">
      <Button
        variant="outlined"
        color="success"
        startIcon={<AddCircleOutlineIcon />}
        onClick={toggleModal}
        className="btn-registrar"
      >
        REGISTRAR
      </Button>
    </div>
  );
};
