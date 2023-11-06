import { useRef, useEffect } from "react";
import axios from "axios";
import { FillAllUser } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";
export const Hirashem = () => {
    let id = useRef()
    let name = useRef()
    let lastname = useRef()
    let email = useRef()
    let dispatch = useDispatch()

    const check = () => {
        debugger
        if (Number(id.current.value) < 100000000) {
            return false
        }
        if (name.current.value == "")
            return false
        if (lastname.current.value == "")
            return false
        if (email.current.value == "")
            return false
        //  let objl = { idUserDto: id, firstNameDto: name, lastNameDto: lastname, emailDto: email }
        return true
    }
    const add = (obj) => {
        debugger
        axios.put('https://localhost:44390/api/user/AddUser', obj).then(x => {
            //לך תשגר את הנתונים לרידק
            dispatch(FillAllUser(x.data))
            debugger
        })
    }

    debugger


    return <div>

        <h1 style={{ textAlign: 'center' }}>הכנס את הפרטים כדי להירשם</h1>
        <div style={{ textAlign: 'center' }}>
            <input type={'number'} ref={id}></input> <label> :הכנס ת.ז</label><br></br><br></br>
            <input type={'text'} ref={name}></input> <label> :הכנס שם פרטי</label><br></br><br></br>
            <input type={'text'} ref={lastname}></input> <label> :הכנס שם משפחה</label><br></br><br></br>
            <input type={'text'} ref={email}></input> <label> :הכנס מייל</label><br></br><br></br>
            <input type={'button'} value="send" onClick={() => add({ idUserDto: id.current.value, firstNameDto: name.current.value, lastNameDto: lastname.current.value, emailDto: email.current.value })}></input>






        </div>

    </div>
}