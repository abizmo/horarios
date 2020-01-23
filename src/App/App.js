import React from "react";
import { Container } from "@material-ui/core";
import styles from "./App.module.css";
import Form from "../components/Form";
import TimeTable from "../components/TimeTable";

const colectas = [
  {
    codigo: 32399,
    nombre: "BANCO PROVINCIAL DE LAS PALMAS (ICHH) C/ Alfonso XIII, 4",
    horario:
      "Domingo a Viernes y festivos de 8:30 a 21:30 h. Sábados de 8:30 a 14:30 y de 15:30 a 20:00 h."
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
      colectas: [],
      selected: []
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ colectas });
    }, 1000);
  }

  handleSelect(codigo) {
    const { selected } = this.state;
    if (selected.indexOf(codigo) === -1) {
      selected.push(codigo);
      this.setState({ selected });
    } else
      this.setState({ selected: selected.filter(item => item !== codigo) });
  }

  async handleSubmit(texto) {
    const { colectas, selected } = this.state;

    await selected.forEach(codigo => {
      const index = colectas.findIndex(colecta => colecta.codigo === codigo);
      if (index !== -1) colectas[index].horario = texto;
    });

    this.setState({ colectas, selected: [] });
  }

  render() {
    const { colectas, selected } = this.state;
    return (
      <Container className={styles.App}>
        <h1 className={styles.Title}>Horarios puntos fijos</h1>
        <Form onSubmit={this.handleSubmit} />
        <TimeTable
          colectas={colectas}
          selected={selected}
          onSelect={this.handleSelect}
        />
      </Container>
    );
  }
}

export default App;
