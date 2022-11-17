import { useState } from "react";
import { customAxios } from "./useAxios";

export const useClientsTable = () => {
  const [state, setState] = useState({
    columnData: [
      { field: "documento" },
      { field: "nombre" },
      { field: "apellido1" },
      { field: "apellido2" },
      { field: "direccion" },
      { field: "telefono" },
      { field: "correo_electronico" },
      { field: "ciudad" },
      { field: "valor_cupo" },
      { field: "estado" },
      { field: "condicion_pago_id" },
      { field: "medio_pago_id" },
    ],
  });

  const loadClientsData = () => {
    customAxios("servicios_clientes/select_clientes.php").then((resp) =>
      setState((prev) => ({ ...prev, clientes: [...resp.data] }))
    );
  };

  return { state, setState, loadClientsData };
};
