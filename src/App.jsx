import React, { useState } from "react";
import { AgregarClienteBtn } from "./components/AgregarClienteBtn";
import { ModalRegistroCliente } from "./components/ModalRegistroCliente";
import { TableClients } from "./components/TableClients";
import { useClientsTable } from "./hooks/useClientsTable";

export const App = () => {
  const { state: clientsState, setState: setClientsState, loadClientsData } = useClientsTable();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>App</h1>
      <TableClients state={clientsState} setState={setClientsState} loadClientsData={loadClientsData} />
      <AgregarClienteBtn setOpenModal={setIsOpen} />
      <ModalRegistroCliente
        loadClientsData={loadClientsData}
        open={isOpen}
        toggleModal={setIsOpen}
      />
    </>
  );
};
