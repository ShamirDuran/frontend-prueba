/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { customAxios } from "./useAxios";

export const useExtraData = () => {
  const [state, setState] = useState({
    condicionesPago: [],
    mediosPago: [],
  });

  useEffect(() => {
    loadCondicionesPago();
    loadMediosPago();
  }, []);

  const loadCondicionesPago = () => {
    customAxios("condiciones_services/select_condiciones.php").then((resp) =>
      setState((prev) => ({ ...prev, condicionesPago: [...resp.data] }))
    );
  };

  const loadMediosPago = () => {
    customAxios("medios_pago_services/select_medios.php").then((resp) =>
      setState((prev) => ({ ...prev, mediosPago: [...resp.data] }))
    );
  };

  return { state, setState };
};
