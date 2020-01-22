import React from "react";
import { Container } from "@material-ui/core";
import styles from "./App.module.css";
import Form from "../components/Form";
import TimeTable from "../components/TimeTable";

const colectas = [
  {
    codigo: 1,
    nombre: "Punto 1",
    horario: "De 1 a 2"
  },
  {
    codigo: 2,
    nombre: "Punto 2",
    horario: "De 1 a 2"
  },
  {
    codigo: 3,
    nombre: "Punto 3",
    horario: "De 1 a 2"
  },
  {
    codigo: 4,
    nombre: "Punto 4",
    horario: "De 1 a 2"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colectas: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ colectas });
    }, 1000);
  }

  render() {
    return (
      <Container className={styles.App}>
        <h1 className={styles.Title}>Horarios puntos fijos</h1>
        <Form />
        <TimeTable colectas={this.state.colectas} />
      </Container>
    );
  }
}

export default App;
