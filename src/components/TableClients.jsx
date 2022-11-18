/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModalsContext } from "../App";

export const TableClients = ({ state, loadClientsData }) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "75vh" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const { editMotalState, setEditMotalState } = useContext(ModalsContext);

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      filterParams: {
        buttons: ["reset", "apply"],
      },
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
  }, []);

  useEffect(() => {
    loadClientsData();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={state.clientes ? state.clientes : []}
          columnDefs={state.columnData}
          defaultColDef={defaultColDef}
          onRowClicked={(e) => {
            setEditMotalState((prev) => ({ ...prev, isOpen: true, initialState: e.data }));
            console.log(editMotalState);
          }}
        />
      </div>
    </div>
  );
};
