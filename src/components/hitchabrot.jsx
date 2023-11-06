import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FillAllUser } from "../redux/actions/userAction";
import { FillUser } from "../redux/actions/iduserAction";
import { UpdateSal } from "../redux/actions/updateSalAction";

export const Hitchaber = () => {
    const [manager, setmanager] = useState({})

    let dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://localhost:44390/api/user/GetAllUser').then(x => {
            //לך תשגר את הנתונים לרידק
            dispatch(FillAllUser(x.data))
            debugger
        })
    }, [])
    let listUser = useSelector(x => x.UserReducer.listUser)

    let mynavigate = useNavigate()
    const check = () => {
        let flag = false
        debugger
        // d
        //sessionStorage.setItem(oo, JSON.stringify(Number(manager.pas)))
        //אם זה המנהל אז הוא הולך לתפריט מנהל
        if (manager.name == "מנהל" && manager.pas == "1234") {
            mynavigate('/mymanager')
        }
        else {
            debugger
            for (let index = 0; index < listUser.length; index++) {

                if (manager.name == listUser[index].firstNameDto && manager.pas == listUser[index].idUserDto) {
                    flag = true
                    dispatch(FillUser(listUser[index].idUserDto))
                }
            }
            if (!flag)
                mynavigate("/hirashem")
            else
                if (flag) {

                    mynavigate("/credit")
                }
        }
    }
    return <div >
        <div className="w3-container w3-padding-32" id={"contact"}>
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            

            <input className="w3-input w3-border" type={"text"} placeholder="Name" required name="Name" onChange={(e) => setmanager({ ...manager, name: e.target.value })} />
            <input className="w3-input w3-section w3-border" type={"password"} placeholder="password" required name="password" onChange={(e) => setmanager({ ...manager, pas: e.target.value })} />
            <button className="w3-button w3-black w3-section" onClick={() => check()}>
                <i className="fa fa-paper-plane"></i> שלח
            </button>
        </div>

        

    </div>
}