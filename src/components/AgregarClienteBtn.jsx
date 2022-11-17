import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { useForm } from "../hooks/useForm";
import { customAxios } from "../hooks/useAxios";

export const AgregarClienteBtn = ({ loadClientsData }) => {
  const [values, handleInputChange] = useForm({
    documento: "1005333241",
    nombre: "Yeison",
    apellido1: "Argemiro",
    apellido2: "Valencia",
    direccion: "Carrera 7a",
    telefono: "3264598789",
    correo_electronico: "test@gmail.com",
    ciudad: "Piedecuesta",
    valor_cupo: "15000000",
    estado: "1",
    condicion_pago_id: "1",
    medio_pago_id: "2",
  });

  const registerNewUser = async () => {
    const resp = await customAxios("servicios_clientes/select_clientes.php");
    
  };

  return (
    <Button variant="outlined" color="success" startIcon={<AddCircleOutlineIcon />}>
      REGISTRAR
    </Button>
  );
};
