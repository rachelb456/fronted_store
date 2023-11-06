import { NavLink, Outlet } from "react-router-dom";

export const ManagerNav = () => {

    return <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" >GAMES TO EVERYONE</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink to={"homePage"}> homePage</NavLink></li>
                    <li className="active"><NavLink to={"hirashem"}>הירשם</NavLink></li>
                    <li className="active"><NavLink to={"hitchaber"}>התחבר</NavLink></li>
                    <li className="active"><NavLink to={"category"}>רשימת קטגוריות</NavLink></li>
                    <li className="active"><NavLink to={"games"}>רשימת משחקים</NavLink></li>
                    <li className="active"><NavLink to={"addcategory"}>הוספת קטגוריה</NavLink></li>
                    <li className="active"><NavLink to={"addProduct"}>הוספת מוצר</NavLink></li>

                </ul>
            </div>


        </nav>
        <Outlet></Outlet>
    </div>
}
