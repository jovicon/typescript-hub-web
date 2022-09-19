import React from "react";
import Layout from "@theme/Layout";

import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  name: yup
    .string("Ingresa tu nombre")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre requerido"),
  lastName: yup
    .string("Ingresa tu apellido")
    .min(3, "El apellido debe tener al menos 3 caracteres")
    .required("Apellido requerido"),
  title: yup
    .string("Ingresa tu el titulo de tu pedido")
    .min(3, "El titulo debe tener al menos 3 caracteres")
    .required("Titulo requerido"),
  email: yup
    .string("Ingresa tu correo electrónico")
    .email("Ingresa un correo electrónico válido")
    .required("Correo electrónico requerido"),
  description: yup
    .string("Ingresa tu mensaje")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("Mensaje requerido"),
});

export default function Hello() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout
      title="Pedidos"
      description="Pagina para pedido de tutoriales o contenido"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          fontSize: "20px",
          padding: "20px",
          flexDirection: "column",
        }}
      >
        <h1>Pedidos</h1>
        <br />
        <p style={{ textAlign: "center" }}>
          Si deseas algún tutorial o contenido especifico puedes solicitarlo
          llenando este formulario y con gusto lo tomaremos en cuenta.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          fontSize: "20px",
          padding: "20px",
        }}
      >
        <form onSubmit={formik.handleSubmit} style={{ maxWidth: "520px" }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Nombre"
            style={{ marginBottom: "1rem" }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Apellido"
            style={{ marginBottom: "1rem" }}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            style={{ marginBottom: "1rem" }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="title"
            name="title"
            label="Titulo"
            style={{ marginBottom: "1rem" }}
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            fullWidth
            id="description"
            name="description"
            label="Mensaje"
            style={{ marginBottom: "1rem" }}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            style={{
              fontWeight: "bold",
            }}
          >
            Enviar
          </Button>
        </form>
      </div>
    </Layout>
  );
}
