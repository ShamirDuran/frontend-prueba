/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { customAxios } from "../hooks/useAxios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const TableClients = ({ state, setState, loadClientsData }) => {
  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    filterParams: {
      buttons: ["reset", "apply"],
    },
  }));

  useEffect(() => {
    loadClientsData();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={state.clientes} columnDefs={state.columnData} defaultColDef={defaultColDef} />
    </div>
  );
};
