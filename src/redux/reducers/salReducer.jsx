import produce from "immer"

const mystate = {
    listWant: [],
}
export const SalReducer = produce((state, action) => {
    switch (action.type) {
        case 'Fill-Data-Sal': {
            //:state.listWorker.push(action.payload)
            state.listWant.push(action.payload);
        }

            break;
        case 'Update-Sal': {
            state.listWant = [...action.payload]
        }
            break;
        case 'ttt': {
            let index
            for (index = 0; index < state.listWant.length; index++) {
                if (state.listWant[index].productId) {
                    const element = state.listWant[index]
                    if (element.productId == action.payload.productId) {
                        break;
                    }
                }

            }
            state.listWant.splice(index,1)
        }
            break;
        default:
            break;
    }
}, mystate)
export default SalReducer