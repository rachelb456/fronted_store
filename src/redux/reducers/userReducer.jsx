import produce from "immer"

const mystate = {
    listUser: []
}
export const UserReducer = produce((state, action) => {
    switch (action.type) {
        case 'Fill-Data-User': {
            state.listUser = action.payload;
        }

            break;

        default:
            break;
    }
}, mystate)
export default UserReducer