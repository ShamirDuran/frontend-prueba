/* eslint-disable array-callback-return */
import React from "react";
import Swal from "sweetalert2";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import formSchema from "../schemas/ClientSchema";
import { customAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { Button, Container, Dialog, Grid, useTheme } from "@mui/material";
import { BuildFormComponents } from "./BuildFormComponents";

export const ModalRegistroCliente = ({ loadClientsData, open, extraData, toggleModal }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [values, handleInputChange, reset] = useForm({
    documento: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    direccion: "",
    telefono: "",
    correo_electronico: "",
    ciudad: "",
    valor_cupo: "",
    estado: "",
    condicion_pago_id: "",
    medio_pago_id: "",
  });

  const registerNewUser = async () => {
    const { data } = await customAxios("servicios_clientes/crear_cliente.php", values, "POST");

    if (data.error) {
      Swal.fire({
        title: "Error!",
        text: data.message,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      loadClientsData();
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerNewUser();
    closeModal();
    reset();
  };

  const closeModal = () => {
    toggleModal((prev) => !prev);
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} style={{ padding: "10" }}>
      <Container>
        <h1 className="form-title">Registrar cliente</h1>

        <span className="close-icon" onClick={closeModal}>
          <CloseIcon />
        </span>

        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {formSchema.map((formField, index) => {
              return (
                <BuildFormComponents
                  key={index}
                  formField={formField}
                  value={values[formField.name]}
                  handleInputChange={handleInputChange}
                />
              );
            })}

            <Grid item xs={6} />
            <Grid item xs={6} className="flex-grid">
              <Button variant="contained" type="submit" className="btn-submit">
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Dialog>
  );
};
