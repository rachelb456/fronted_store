import produce from "immer"
const mystate = {
    idUser:null,
}
export const idUserReducer = produce((state, action) => {
    switch (action.type) {
        case 'Fill-User': state.idUser = action.payload;

            break;
    }
}, mystate)
export default idUserReducer