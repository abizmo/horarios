import { GET_COLECTAS, SELECT_COLECTA, MODIFY_HORARIO } from "./actionTypes";

export const getColectas = () => ({
  type: GET_COLECTAS
});

export const selectColecta = codigo => ({
  type: SELECT_COLECTA,
  payload: codigo
});

export const modifyHorario = mensaje => ({
  type: MODIFY_HORARIO,
  payload: mensaje
});
