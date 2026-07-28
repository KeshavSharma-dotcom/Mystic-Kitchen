import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"
import "./AppStyles.css"
export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}