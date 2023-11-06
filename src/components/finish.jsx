import { useSelector, useDispatch } from "react-redux";
import { UpdateSal } from "../redux/actions/updateSalAction";
import { useNavigate, Outlet } from "react-router";
import { Dellp } from "../redux/actions/salAction";
export const Finish = () => {
    let navigate = useNavigate()
    let mydispatch = useDispatch()
    let listSal = useSelector(x => x.SalReducer.listWant)
 
    
    //amount { get; set; }
    //public int productId
    
    const setmonehosef = (obj, e) => {
        debugger
        let arr = [...listSal]
        for (let index = 0; index < arr.length; index++)
            if (arr[index].productId == obj.productId) {
                if (Number(e) != 0) {
                    let temp = { ...arr[index] }
                    temp.amount = Number(e)
                    temp.finalPrice=(temp.price)*Number(e)
                    arr[index] = { ...temp }
                    mydispatch(UpdateSal(arr))
                }
                if (Number(e) == 0) {
                    let flag = window.confirm("האם אתה בטוח שאתה רוצה למחוק")
                    if (flag)
                        mydispatch(Dellp(arr[index]))

                }
            }
    }
    const movePage = () => {
        navigate('/hitchaber')
    }
    console.log(listSal)
    // productId: i.idProductDto, amount: 1,finalPrice:i.costDto,price:i.costDto,name: i.nameProductDto 
    return <div>
        {/* <Nav></Nav> */}
        {listSal.map(l => (
            <div className="w3-white w3-margin" className="w3-third w3-margin-bottom" style={{textAlign:'center',marginLeft:'10%'}}>
                <div className="w3-container w3-padding w3-black">
                    <h4>מוצרים שהוזמנו</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <li className="w3-padding-16">
                        <span className="w3-large">שם מוצר</span>
                        <br/>
                        <span>{l.name}</span>
                    </li>
                    <li className="w3-padding-16">

                        <span className="w3-large">מחיר</span>
                        <br />
                        <span>{l.price}</span>
                    </li>
                    <li className="w3-padding-16">

                        <span className="w3-large">מחיר בסה"כ</span>
                        <br />
                        <span>{l.finalPrice}</span>
                    </li>
                    <li className="w3-padding-16">

                        <span className="w3-large">הכנס כמות</span>
                        <br />
                        <span><input type={'number'} defaultValue={1} size={"18"} min={0} max={l.amountInMelayDto} onChange={(e) => setmonehosef(l, e.target.value)}></input></span>
                    </li>

                </ul>
            </div>
        ))}
        {/* {newlist.map(l => (
            <div>
                <p>{l.nameProductDto}</p>
                <p>{l.costDto} מחיר:</p>
                <input type={'number'} size={"18"} min={0} max={l.amountInMelayDto} onChange={(e) => setmonehosef(l, e.target.value)}></input>
            </div>
        ))}
        {/* */}
        <br></br>
        <button onClick={() => movePage()}>send</button> 
        {/* <Outlet></Outlet> */}
    </div>
}