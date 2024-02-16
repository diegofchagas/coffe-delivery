import {Routes, Route} from "react-router-dom"
import { DefaultLayout } from "./Layout/DefaultLayout"



export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<DefaultLayout/>}/>
      </Route>
    </Routes>
  )
}
