import { useState } from "react";

/**
 * Este hook se utiliza para el control del estado de los formularios. Se hace de esta forma para
 * quitar complejidad al componente y que pueda ser usado en proyectos grandes sin redundancia de codigo.
 *
 * @param {dynamic} initialState Contiene el estado inicial, puede se run valor o u  objeto
 * @returns Retorna el state con los valores del form y la función para modificarlos
 */
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // se utiliza para limpiar los inputs del form
  const reset = () => {
    setValues(initialState);
  };

  // funcion que guarda el value del input dentro del state utilizando como key el name del input
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleInputChange, reset, setValues];
};
