
import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Resgister"
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {BrowserRouter , Routes , Route ,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export default function App (){
  const user = useSelector(state=>state.user.currentUser) ;
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={ <Home/>}/>
      <Route path='/products/:category' element={<ProductList/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path="/login" element={user? <Navigate to="/"/>: <Login/>}/>
      <Route path='/register' element={user? <Navigate to="/"/>:<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}