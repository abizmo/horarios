import React from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    this.setState({ input: "" });
    return this.props.onSubmit(input);
  }

  render() {
    const { input } = this.state;
    const chars = input.length;
    return (
      <Paper className={styles.Paper}>
        <form
          className={styles.Form}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <TextField
            required
            id="Horario"
            label="Horario"
            value={input}
            variant="outlined"
            error={chars > 150}
            helperText={`${150 - chars} caracteres máximo!`}
            className={styles.Input}
            style={{ marginRight: 16 }}
            onChange={e => this.setState({ input: e.target.value })}
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            disabled={chars === 0 || chars > 150}
            className={styles.Button}
          >
            Modificar
          </Button>
        </form>
      </Paper>
    );
  }
}

export default Form;
