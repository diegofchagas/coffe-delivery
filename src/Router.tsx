import {Routes, Route} from "react-router-dom"

import { DefaultLayout } from "./Layout/DefaultLayout"

import { Checkout } from "./pages/Checkout"
import { CheckoutFiled } from "./pages/CheckoutFiled"
import { Success } from "./pages/Success"
import { Home } from "./pages/Home"



export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
      <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/checkoutFiled" element={<CheckoutFiled/>}/>
        <Route path="/success" element={<Success/>}/>
      </Route>
    </Routes>
  )
}
