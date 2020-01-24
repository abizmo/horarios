import React from "react";
import { connect } from "react-redux";
import {
  Checkbox,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import styles from "./TimeTable.module.css";

import { getColectas, selectColecta } from "../../redux/actions";

class TimeTable extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getColectas();
    }, 1000);
  }

  isItemSelected(codigo) {
    return this.props.selected.indexOf(codigo) !== -1;
  }

  renderColectas() {
    const { colectas, selectColecta } = this.props;

    if (!colectas) return;

    return colectas.map(colecta => (
      <TableRow key={colecta.codigo}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={this.isItemSelected(colecta.codigo)}
            inputProps={{ "aria-labelledby": colecta.codigo }}
            onClick={() => selectColecta(colecta.codigo)}
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
            <TableCell style={{ width: "5%" }}>Código</TableCell>
            <TableCell style={{ width: "40%" }}>Nombre</TableCell>
            <TableCell style={{ width: "55%" }}>Horario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.renderColectas()}</TableBody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  colectas: state.horarios.colectas,
  selected: state.horarios.selected
});

export default connect(mapStateToProps, { getColectas, selectColecta })(
  TimeTable
);
