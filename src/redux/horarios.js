import { GET_COLECTAS, SELECT_COLECTA, MODIFY_HORARIO } from "./actionTypes";

const initialState = {
  colectas: [],
  selected: []
};

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

const getColectas = () => ({ colectas, selected: [] });

const selectColectas = (state, codigoColecta) => {
  const { selected } = state;
  let updateSelected;
  if (selected.indexOf(codigoColecta) === -1)
    updateSelected = selected.concat([codigoColecta]);
  else updateSelected = selected.filter(item => item !== codigoColecta);
  return { ...state, selected: updateSelected };
};

const modifyHorarios = (state, message) => {
  const { colectas, selected } = state;
  return {
    colectas: colectas.map(colecta =>
      selected.indexOf(colecta.codigo) !== -1
        ? { ...colecta, horario: message }
        : colecta
    ),
    selected: []
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COLECTAS:
      return getColectas();
    case SELECT_COLECTA:
      return selectColectas(state, action.payload);
    case MODIFY_HORARIO:
      return modifyHorarios(state, action.payload);
    default:
      return state;
  }
}
