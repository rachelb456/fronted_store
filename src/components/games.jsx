import ProductReducer from "../redux/reducers/productReducer";
import { useSelector, useDispatch } from "react-redux";
import { FillAllProduct } from "../redux/actions/productAction";
import axios from "axios";
import { useNavigate } from "react-router";

export const Games = () => {
    debugger
    let list = useSelector(x => x.ProductReducer.listProd)
    let mydispatch = useDispatch()
    let mynavigate = useNavigate()

    const mydell = (id) => {
        axios.delete(`https://localhost:44390/api/Product/dellProduct/${id}`).then(x => {
            debugger
            mydispatch(FillAllProduct(x.data))
        })
    }
    // useEffect(() => {
    //     axios.get('https://localhost:44390/api/Product/GetAllProduct').then(x => {
    //         //לך תשגר את הנתונים לרידק
    //         mydispatch(FillAllProduct(x.data))
    //         debugger
    //     })
    // }, [])
    const updateDb = (obj) => {
        mydispatch(FillAllProduct(obj))
        debugger
        mynavigate('../addProduct')
    }
    return <div>

        <table className="table" >
            <thead>
                <tr>
                    <th>idProduct</th>
                    <th>idCategory</th>
                    <th>nameProduct</th>
                    <th>amountInMelay</th>
                    <th>cost</th>
                </tr>
            </thead>
            <tbody>
                {list.map(l => (
                    <tr >

                        <td>{l.idProductDto}</td>
                        <td>{l.idCategoryDto}</td>
                        <td>{l.nameProductDto}</td>
                        <td>{l.amountInMelayDto}</td>
                        <td>{l.costDto}</td>
                        <td><button onClick={() => mydell(l.idProductDto)}>מחק</button></td>
                        <td><button onClick={() => updateDb(l)}>עידכון</button></td>

                    </tr>
                ))}

            </tbody>
        </table>


    </div>
}