import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { FillUser } from "../redux/actions/iduserAction";

export const Credit = () => {
    debugger
    let list = useSelector(x => x.SalReducer.listWant)
    // const [l, setl] = useState(0)
    // const [thedata, setthadata] = useState({})
    let id = useSelector(x => x.idUserReducer.idUser)
    let d = useDispatch()
    let newid = Number(id)
    const ishur = () => {

        axios.post(`https://localhost:44390/api/sal/isamountInStack/${newid}`, list).then(x => {
            //setthadata(x.data)
            //  d(FillUser(x.data))
            let sum = x.data
            if (sum > 0)
                alert(sum + "התבצעה הקניה")
            else
                alert("לא התבצעה קניה")
            debugger
        })
    }
    //setl(id)
    return (
        <div>
            <div className="w3-container w3-padding-32" id="contact">

                <input className="w3-input w3-border" type="text" placeholder="card number" required name="Name" />
                <input className="w3-input w3-section w3-border" type="number" placeholder="validity" required name="Email" />
                <button className="w3-button w3-black w3-section" onClick={() => ishur()} >
                    <i className="fa fa-paper-plane"></i> SEND
      </button>

            </div>

        </div>
    )


}