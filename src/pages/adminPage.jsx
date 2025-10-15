import { Link, Route, Routes } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { BsBoxSeamFill } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import AdminProductPage from "./admin/adminProductPage";
import AddProductPage from "./admin/adminAddNewProduct";

export default function AdminPage(){
    return(

        <div className="w-full h-full bg-primary flex p-2">  {/*methnin eht h-full danna puluwn */}
           <div className="w-[300px] h-full bg-primary flex flex-col items-center gap-[20px]">

            <div className="flex flex-row w-[90%] h-[70px] bg-accent items-center rounded-2xl mb-[20px]">
                <img src="logo.png" alt="CBC-logo.png" className="h-[100px] " />
                <span className="text-white text-xl ml-4">Admin Panel</span>
            </div>

            <Link to = "/admin" className="w-[90%] flex items-center gap-2 p-4 hover: bg-accent rounded-lg" >
                <FaChartLine /> 
                Dashboard
            </Link>
            <Link to = "/admin/orders" className="w-[90%] flex items-center gap-2 p-4 hover: bg-accent rounded-lg" >
                <IoMdCart className="text-xl"/> 
                Orders
            </Link>
            <Link to = "/admin/products" className="w-[90%] flex items-center gap-2 p-4 hover: bg-accent rounded-lg" >
                <BsBoxSeamFill/> 
                Products
            </Link>
            <Link to = "/admin/users" className="w-[90%] flex items-center gap-2 p-4 hover: bg-accent rounded-lg" >
                <HiMiniUsers className="text-xl"/> 
                Users
            </Link>
                
           </div>

           <div className="w-[calc(100%-300px)] h-full border-[4px] border-accent rounded-[20px] overflow-hidden">
            <div className="w-full max-w-full h-full max-h-full overflow-y-scroll">
                <Routes path="/">
                <Route path="/" element={<h1>Dashbord</h1>}/>
                <Route path="/products" element={<AdminProductPage/>}/>
                <Route path="/orders" element={<h1>Orders</h1>}/>
                <Route path="/add-product" element={<AddProductPage/>}/>

            </Routes>
            </div>

           </div>

        </div>
    )
}