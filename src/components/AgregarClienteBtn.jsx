import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

export const AgregarClienteBtn = ({ setOpenModal }) => {
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <Button variant="outlined" color="success" startIcon={<AddCircleOutlineIcon />} onClick={toggleModal}>
      REGISTRAR
    </Button>
  );
};
