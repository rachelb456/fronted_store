import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FillAllCategory, FillAllCategorywithStatus } from "../redux/actions/categoryAction";
import { object } from "prop-types";

export const AddCategory = () => {
  let ob = useSelector(v => v.CategoryReducer.obj)
  const [newCat, setnewCat] = useState(ob)

  let d = useDispatch()
  const add = (newCat) => {
    debugger
    if (ob.idCategoryDto != undefined) {
      axios.post(`https://localhost:44390/api/category/updateCategory/${newCat.idCategoryDto}`, newCat).then(x => {
        //d(FillAllCategory(x.data))
        d(FillAllCategory({}))

      })
    }
    else {
      axios.put('https://localhost:44390/api/category/AddCategory', newCat).then(x => {
        debugger;
        d(FillAllCategory(x.data))
      })
    }
  }
  return (
    <div>
      {/* <h1 style={{ textAlign: 'center' }}><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> הכנס שם קטגוריה</h1> */}

      <br />
      {/* */}
      <p className="w3-input w3-border">
        <input type={"text"} placeholder={"Name"} required name={"Name"} onChange={(e) => setnewCat({ ...newCat, nameCategoryDto: e.target.value })} value={newCat.nameCategoryDto}>
        </input></p>
      <p>
        <button className="w3-button w3-black" style={{ textAlign: 'center' }} onClick={() => add(newCat)}>
          <i className="fa fa-paper-plane"></i>SEND
        </button>
      </p>



    </div>
  )

}