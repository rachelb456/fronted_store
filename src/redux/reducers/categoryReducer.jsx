import produce from "immer"

const mystate = {
    listCategory: [],
    obj: {}

}
export const CategoryReducer = produce((state, action) => {
    switch (action.type) {
        case 'Fill-Data-Category': {
            state.listCategory = action.payload;
            state.obj = action.payload
        }

            break;

        default:
            break;
    }
}, mystate)
export default CategoryReducer