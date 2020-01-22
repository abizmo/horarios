import React from "react";
import {
  Checkbox,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import styles from "./TimeTable.module.css";

class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  handleSelection(codigo) {
    const { selected } = this.state;
    if (selected.indexOf(codigo) === -1) {
      selected.push(codigo);
      this.setState({ selected });
    } else
      this.setState({ selected: selected.filter(item => item !== codigo) });
  }

  isItemSelected(codigo) {
    return this.state.selected.indexOf(codigo) !== -1;
  }

  renderColectas() {
    const { colectas } = this.props;

    return colectas.map(colecta => (
      <TableRow key={colecta.codigo}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={this.isItemSelected(colecta.codigo)}
            inputProps={{ "aria-labelledby": colecta.codigo }}
            onClick={() => this.handleSelection(colecta.codigo)}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          {colecta.codigo}
        </TableCell>
        <TableCell>{colecta.nombre}</TableCell>
        <TableCell>{colecta.horario}</TableCell>
      </TableRow>
    ));
  }
  render() {
    return (
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Horario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.renderColectas()}</TableBody>
      </Table>
    );
  }
}

export default TimeTable;
