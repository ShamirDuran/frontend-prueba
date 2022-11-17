const formSchema = [
  { label: "Documento", name: "documento", type: "input", required: true, maxLenght: 20, dateType: "number" },
  { label: "Nombre", name: "nombre", type: "input", required: true, maxLenght: 20, dateType: "text" },
  { label: "Primer apellido", name: "apellido1", type: "input", required: true, maxLenght: 20, dateType: "text" },
  { label: "Segundo Apellido", name: "apellido2", type: "input", required: true, maxLenght: 20, dateType: "text" },
  { label: "Direccion", name: "direccion", type: "input", required: true, maxLenght: 20, dateType: "text" },
  { label: "Telefono", name: "telefono", type: "input", required: true, maxLenght: 20, dateType: "number" },
  {
    label: "Email",
    name: "correo_electronico",
    type: "input",
    required: true,
    maxLenght: 20,
    dateType: "email",
  },
  { label: "Ciudad", name: "ciudad", type: "select", required: true, maxLenght: 20, defaultValue: "" },
  { label: "Valor_cupo", name: "valor_cupo", type: "currency", required: true, maxLenght: 20 },
  { label: "Estado", name: "estado", type: "select", required: true, maxLenght: 20, defaultValue: "" },
  {
    label: "Condición pago",
    name: "condicion_pago_id",
    type: "select",
    required: true,
    maxLenght: 20,
    defaultValue: "",
  },
  { label: "Medio pago", name: "medio_pago_id", type: "select", required: true, maxLenght: 20, defaultValue: "" },
];

export default formSchema;
