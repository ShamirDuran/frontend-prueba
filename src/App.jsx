import { Container } from "@mui/material";
import React, { useState } from "react";
import { AgregarClienteBtn } from "./components/AgregarClienteBtn";
import { ModalEditarCliente } from "./components/ModalEditarCliente";
import { ModalRegistroCliente } from "./components/ModalRegistroCliente";
import { TableClients } from "./components/TableClients";
import { useClientsTable } from "./hooks/useClientsTable";

export const App = () => {
  const { state: clientsState, loadClientsData } = useClientsTable();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <h1 className="app-title">App</h1>
        <TableClients state={clientsState} loadClientsData={loadClientsData} />
        <AgregarClienteBtn setOpenModal={setIsOpen} />
        <ModalRegistroCliente loadClientsData={loadClientsData} open={isOpen} toggleModal={setIsOpen} />
        <ModalEditarCliente initialState={} loadClientsData={loadClientsData} open={isOpen} toggleModal={setIsOpen} />
      </Container>
    </>
  );
};
