/* eslint-disable array-callback-return */
import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import formSchema from "../schemas/ClientSchema";
import { customAxios } from "../hooks/useAxios";
import { useForm } from "../hooks/useForm";
import { Button, Container, Dialog, Grid, useTheme } from "@mui/material";
import { BuildFormComponents } from "./BuildFormComponents";
import { ModalsContext } from "../App";

export const ModalEditarCliente = ({ loadClientsData, extraData }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { editMotalState, setEditMotalState } = useContext(ModalsContext);

  const [values, handleInputChange, reset, setFormValues] = useForm();

  const modificarCliente = async () => {
    const { data } = await customAxios("servicios_clientes/actualizar_cliente.php", values, "POST");

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

  useEffect(() => {
    setFormValues(editMotalState.initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMotalState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    modificarCliente();
    closeModal();
    reset();
  };

  const closeModal = () => {
    setEditMotalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Dialog fullScreen={fullScreen} open={editMotalState.isOpen} style={{ padding: "10" }}>
      <Container>
        <h1 className="form-title">Modificar cliente</h1>

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
                Modificar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Dialog>
  );
};
