import { Container } from "@mui/material";
import React, { createContext, useState } from "react";
import { AgregarClienteBtn } from "./components/AgregarClienteBtn";
import { ModalEditarCliente } from "./components/ModalEditarCliente";
import { ModalRegistroCliente } from "./components/ModalRegistroCliente";
import { TableClients } from "./components/TableClients";
import { useClientsTable } from "./hooks/useClientsTable";

export const ModalsContext = createContext();

export const App = () => {
  const { state: clientsState, loadClientsData } = useClientsTable();
  const [isOpen, setIsOpen] = useState(false);
  const [editMotalState, setEditMotalState] = useState({
    isOpen: false,
    initialState: {},
  });
  return (
    <>
      <ModalsContext.Provider value={{ editMotalState, setEditMotalState }}>
        <Container>
          <h1 className="app-title">App</h1>
          <TableClients state={clientsState} loadClientsData={loadClientsData} />
          <AgregarClienteBtn setOpenModal={setIsOpen} />
          <ModalRegistroCliente loadClientsData={loadClientsData} open={isOpen} toggleModal={setIsOpen} />
          <ModalEditarCliente loadClientsData={loadClientsData} />
        </Container>
      </ModalsContext.Provider>
    </>
  );
};
