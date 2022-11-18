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
      { field: "ciudad", floatingFilter: true, filter: "agSetColumnFilter" },
      { field: "valor_cupo" },
      { field: "estado", floatingFilter: true },
      { field: "condicion_pago_id", floatingFilter: true },
      { field: "medio_pago_id", floatingFilter: true },
    ],
  });

  const loadClientsData = () => {
    customAxios("servicios_clientes/select_clientes.php").then((resp) => {
      if (resp.error === true) {
        return {};
      }

      return setState((prev) => ({ ...prev, clientes: [...resp.data] }));
    });
  };

  return { state, setState, loadClientsData };
};
