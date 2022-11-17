import React from "react";
import { useExtraData } from "../hooks/useExtraData";
import { FormControl, Grid, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export const BuildFormComponents = ({ formField, value, handleInputChange }) => {
  const { state: dataState } = useExtraData();
  const { condicionesPago, mediosPago } = dataState;

  switch (formField.type) {
    case "input":
      return (
        <Grid key={formField.name} item xs={6}>
          <TextField
            name={formField.name}
            label={formField.label}
            onChange={handleInputChange}
            variant="standard"
            required={formField.required}
            value={value}
            fullWidth
          />
        </Grid>
      );

    case "select":
      return (
        <Grid key={formField.name} item xs={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel id={formField.name}>{formField.label}</InputLabel>
            <Select
              labelId={formField.name}
              name={formField.name}
              label={formField.label}
              onChange={handleInputChange}
              variant="standard"
              value={value}
              required={formField.required}
            >
              {formField.name === "ciudad" &&
                ["Bucaramanga", "Piedecuesta", "Girón"].map((c) => {
                  return (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  );
                })}

              {formField.name === "estado" &&
                ["Inactivo", "Activo"].map((e, i) => {
                  return (
                    <MenuItem key={e} value={i}>
                      {e}
                    </MenuItem>
                  );
                })}

              {formField.name === "condicion_pago_id" &&
                condicionesPago.map((cp) => {
                  return (
                    <MenuItem key={cp.nombre} value={cp.id}>
                      {cp.nombre}
                    </MenuItem>
                  );
                })}

              {formField.name === "medio_pago_id" &&
                mediosPago.map((mp) => {
                  return (
                    <MenuItem key={mp.nombre} value={mp.id}>
                      {mp.nombre}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
      );

    case "currency":
      return (
        <Grid key={formField.name} item xs={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">{formField.label}</InputLabel>
            <Input
              name={formField.name}
              label={formField.label}
              onChange={handleInputChange}
              variant="standard"
              required={formField.required}
              value={value}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        </Grid>
      );

    default:
      return <></>;
  }
};
