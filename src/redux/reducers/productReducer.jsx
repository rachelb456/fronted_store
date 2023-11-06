import produce from "immer"
debugger
const mystate = {
    listProd: [],
    obj: {}
}
export const ProductReducer = produce((state, action) => {
    switch (action.type) {
        case 'Fill-Data-Product': {
            //:state.listWorker.push(action.payload)
            state.listProd = action.payload;
            state.obj = action.payload
        }

            break;


        default:
            break;
    }
}, mystate)
export default ProductReducer