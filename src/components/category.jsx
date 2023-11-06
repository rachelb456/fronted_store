import { useSelector, useDispatch } from "react-redux";
import { FillAllCategory } from "../redux/actions/categoryAction";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const Category = (props) => {

    let list = useSelector(v => v.CategoryReducer.listCategory)
    let mynavigate = useNavigate()
    // useEffect-בעת טעינה
    let mydispatch = useDispatch()
    const mydell = (id) => {
        debugger
        axios.delete(`https://localhost:44390/api/category/dellCategory/${id}`).then(x => {
            debugger
            mydispatch(FillAllCategory(x.data))
        })
    }
    useEffect(() => {
        axios.get('https://localhost:44390/api/category/GetAllCategory').then(x => {
            //לך תשגר את הנתונים לרידק
            mydispatch(FillAllCategory(x.data))
            debugger
        })
    }, [])

    const go = (obj) => {
        debugger
        // let newobj = { ...obj }
        // newobj.status = 1
        mydispatch(FillAllCategory(obj))
        console.log()
        mynavigate('../addcategory')
    }
    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>idCategory</th>
                    <th>nameCategory</th>
                </tr>
            </thead>
            <tbody>
                {list.map(l => (
                    <tr>
                        <td>{l.idCategoryDto}</td>
                        <td>{l.nameCategoryDto}</td>
                        <td><button onClick={() => mydell(l.idCategoryDto)}>מחק</button></td>
                        <td><button onClick={() => go(l)} >עידכון</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}