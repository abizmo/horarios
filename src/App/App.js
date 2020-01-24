import React from "react";
import { Container } from "@material-ui/core";
import styles from "./App.module.css";
import Form from "../components/Form";
import TimeTable from "../components/TimeTable";

function App() {
  return (
    <Container className={styles.App}>
      <h1 className={styles.Title}>Horarios puntos fijos</h1>
      <Form />
      <TimeTable />
    </Container>
  );
}

export default App;
