import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FillAllProduct } from "../redux/actions/productAction";

export const AddApdateProduct = () => {
    debugger
    let ob = useSelector(x => x.ProductReducer.obj)
    const [newProduct, setnewProduct] = useState(ob)
    let d = useDispatch()

    const addProduct = (newProduct) => {
        //https://localhost:44390/api/Product/updateProduct/112
        // if(ob.idProduct!= undefined)
        // {

        // }
        if (ob.idProduct != undefined)
        {
            axios.post(`https://localhost:44390/api/Product/updateProduct/${newProduct.idProduct}`, newProduct)
                .then(x => {
                    debugger;
                    d(FillAllProduct({}))
                })
        }
        else
        {
            axios.put(`https://localhost:44390/api/Product/AddProduct`, newProduct).then(x => {
                debugger;
                d(FillAllProduct(x.data))
            })
            }


    }

    return (
        <div>
        <input placeholder="הכנס קוד קטגוריה" type={"number"} onChange={(e) => setnewProduct({ ...newProduct, nameCategoryDto: e.target.value })} value={newProduct.idCategory}> </input>
        <input placeholder="הכנס שם מוצר" type={"text"} onChange={(e) => setnewProduct({ ...newProduct, nameProductDto: e.target.value })} value={newProduct.nameProduct}> </input>
        <input placeholder="הכנס כמות במלאי " type={"number"} onChange={(e) => setnewProduct({ ...newProduct, amountInMelayDto: e.target.value })} value={newProduct.amountInMelay}> </input>
        <input placeholder="הכנס מחיר " type={"number"} onChange={(e) => setnewProduct({ ...newProduct, costDto: e.target.value })} value={newProduct.cost}> </input>
        <button onClick={() => addProduct(newProduct)}>send</button>
    </div>)
}