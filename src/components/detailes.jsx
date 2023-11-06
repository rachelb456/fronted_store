import { useSearchParams, useLocation } from "react-router-dom";


export const Detailes = () => {
    const params = useLocation()

    return <div>

        <div className="w3-row-padding" style={{ margin: "0 -18px" }}>


            <div className="w3-third w3-margin-bottom">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                    <li className="w3-teal w3-xlarge w3-padding-32" ><img src={`https://localhost:44390/${params.state.im}.jpg`} alt="John" style={{ width: "170px", height: '100px' }} className="w3-hover-opacity" /></li>
                    <li className="w3-padding-16">קוד מוצר</li>
                    <li className="w3-padding-16">{params.state.id}</li>
                    <li className="w3-padding-16">שם מוצר</li>
                    <li className="w3-padding-16"><h3>{params.state.name}</h3></li>
                    <li className="w3-padding-16">{params.state.am}: כמות במלאי</li>
                    <li className="w3-padding-16">{params.state.cost}: מחיר ליחידה</li>
                </ul>
            </div>



        </div>
    </div>
}