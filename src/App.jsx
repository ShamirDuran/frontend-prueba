import React from "react";
import { AgregarClienteBtn } from "./components/AgregarClienteBtn";
import { TableClients } from "./components/TableClients";
import { useClientsTable } from "./hooks/useClientsTable";

export const App = () => {
  const { state, setState, loadClientsData } = useClientsTable();

  return (
    <>
      <h1>App</h1>
      <TableClients state={state} setState={setState} loadClientsData={loadClientsData} />
      <AgregarClienteBtn loadClientsData={loadClientsData} />
    </>
  );
};
