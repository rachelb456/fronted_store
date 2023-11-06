import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FillAllProduct } from "../redux/actions/productAction";
import { useNavigate } from "react-router";

export const AddProduct = () => {
    debugger
    let n = useNavigate()
    let ob = useSelector(x => x.ProductReducer.obj)
    const [newProduct, setnewProduct] = useState(ob)
    let d = useDispatch()
    const addProduct = (newProduct) => {
        if (ob.idProductDto != undefined) {
            axios.post(`https://localhost:44390/api/Product/updateProduct/${newProduct.idProductDto}`, newProduct)
                .then(x => {
                    debugger;
                    d(FillAllProduct({}))
                })
            // n('../games')
        }
        else {
            axios.put(`https://localhost:44390/api/Product/AddProduct`, newProduct).then(x => {
                debugger;
                d(FillAllProduct(x.data))
            })
            // n('../games')
        }
    }
    return (

        <div >
            <p className='w3-input w3-border'>
                <input type={"number"} placeholder="הכנס קוד קטגוריה" required onChange={(e) => setnewProduct({ ...newProduct, nameCategoryDto: e.target.value })} value={newProduct.nameCategoryDto}></input>
            </p>
            <p className='w3-input w3-border'>
                <input placeholder="הכנס שם מוצר" type={"text"} required onChange={(e) => setnewProduct({ ...newProduct, nameProductDto: e.target.value })} value={newProduct.nameProductDto}></input>
            </p>
            <p className='w3-input w3-border'>
                <input type={"number"} placeholder="הכנס כמות במלאי " required onChange={(e) => setnewProduct({ ...newProduct, amountInMelayDto: e.target.value })} value={newProduct.amountInMelayDto}></input>
            </p>
            <p className='w3-input w3-border'>
                <input type={"number"} placeholder="הכנס מחיר " required onChange={(e) => setnewProduct({ ...newProduct, costDto: e.target.value })} value={newProduct.costDto}></input>
            </p>
            <button onClick={() => addProduct(newProduct)}><i className="fa fa-paper-plane"></i>send</button>

        </div>

    )
}