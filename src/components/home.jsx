import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FillAllProduct } from "../redux/actions/productAction";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FillAllSal } from "../redux/actions/salAction";

export const Home = () => {

    let listProd = useSelector(n => n.ProductReducer.listProd)
    let mynavigate = useNavigate()

    let dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://localhost:44390/api/Product/GetAllProduct').then(x => {
            //לך תשגר את הנתונים לרידק
            dispatch(FillAllProduct(x.data))
            debugger
        })
    }, [])

    let listSal = useSelector(x => x.SalReducer.listWant)
    const addSal = (obj) => {
        debugger
        let count = 0
        if (listSal.length != 0) {
            for (let index = 0; index < listSal.length; index++) {
                const element = listSal[index];
                if (element.productId != obj.productId)
                    count++
            }
            // listSal.forEach(element => {
            //     if (element.id != obj.productId)
            //         count++
            // });
            if (count == listSal.length)
                dispatch(FillAllSal(obj))
        }
        else
            dispatch(FillAllSal(obj))
        console.log(listSal)
    }
    const finishBuy = () => {
        mynavigate('/finish')
    }
    return (
        <div>
            {listProd.map(i => (
                // <div style={{
                //     display: 'inline-block', width: '15%', margin: '2%', borderStyle: 'double',
                //     borderColor: 'black', borderWidth: '5px', paddingTop: '15px', textAlign: 'center'
                // }}>
                //     <h3 > שם מוצר:{i.nameProductDto} </h3>
                //     <h3>  {i.costDto} :מחיר</h3>
                //     {/* <h6>{i.imgDto}</h6> */}
                //     <img src={`https://localhost:44390/${i.imgDto}.jpg`} width='100px' height='100px'></img>
                //     <Link to={`/details/${i.nameProductDto}`} state={{ id: i.idProductDto, name: i.nameProductDto, cat: i.idCategoryDto, am: i.amountInMelayDto, cost: i.costDto }} style={{ color: 'black' }}>
                //         <h4>פרטים נוספים</h4></Link>
                //     <button onClick={() => addSal({ productId: i.idProductDto, amount: 1 })}>הוסף לסל</button>
                // </div>

                <div className="w3-third w3-margin-bottom" style={{ textAlign: 'center'}}>
                    <div className="w3-card-4">
                        <img src={`https://localhost:44390/${i.imgDto}.jpg`} alt="John" style={{ width: "170px", height: '100px' }} className="w3-hover-opacity" />
                        <div className="w3-container">
                            <h3 >שם מוצר</h3>
                            <h2 className="w3-opacity">{i.nameProductDto} </h2>
                            <p>{i.costDto} :מחיר</p>
                            <Link to={`/details/${i.nameProductDto}`} state={{ id: i.idProductDto, name: i.nameProductDto, cat: i.idCategoryDto, am: i.amountInMelayDto, cost: i.costDto, im: i.imgDto }} style={{ color: 'black' }}>
                                <h4>פרטים נוספים</h4></Link>
                            <p><button className="w3-button w3-light-grey w3-block" onClick={() => addSal({ productId: i.idProductDto, amount: 1, finalPrice: i.costDto, price: i.costDto, name: i.nameProductDto })}>הוסף לסל</button></p>
                        </div>
                    </div>
                </div>

            ))}
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <button onClick={() => finishBuy()}>סיום קניה</button>
            {/* // <Outlet></Outlet> */}
        </div>

    )
}