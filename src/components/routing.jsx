import { Routes, Route } from "react-router";
import { Nav } from "./nav";
import { Home } from "./home";
import { Hirashem } from "./hirashem";
import { Hitchaber } from "./hitchabrot";
import { ManagerNav } from "./managerNav";
import { Category } from "./category";
import { Games } from "./games";
import { Detailes } from "./detailes";
import { Finish } from "./finish";
import { Credit } from "./credit";
import { AddCategory } from "./addcategory";
import { AddProduct } from "./addproduct";


export const Routing = () => {

    return <div>
        <Routes>
            <Route path='/' element={<Nav></Nav>}>
                <Route path='homePage' element={<Home></Home>}> </Route>
                <Route path='hirashem' element={<Hirashem></Hirashem>}></Route>
                <Route path='hitchaber' element={<Hitchaber></Hitchaber>}></Route>

            </Route>
            <Route path='/credit' element={<Credit></Credit>}></Route>
            <Route path='/hirashem' element={<Hirashem></Hirashem>}></Route>
            <Route path='/hitchaber' element={<Hitchaber></Hitchaber>}></Route>

            <Route path='/details/:name' element={<Detailes></Detailes>}></Route>
            <Route path='/finish' element={<Finish></Finish>}>
            </Route>
            {/* <Route path='/hitchbroot'></Route> */}
            <Route path="/mymanager" element={<ManagerNav></ManagerNav>}>
                <Route path="category" element={<Category></Category>}></Route>
                <Route path="games" element={<Games></Games>}></Route>
                <Route path="addcategory" element={<AddCategory></AddCategory>}></Route>
                <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>

            </Route>
        </Routes>
    </div>
}