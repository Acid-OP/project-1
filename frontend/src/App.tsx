import {BrowserRouter , Route , Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
export default function App() {
  return (
    <Landing/>
    // <BrowserRouter>
    // <Routes>
    //   <Route path= "/signup" element={<Signup/>}></Route>
    //   <Route path= "/signin" element={<Signin/>}></Route>
    //   <Route path= "/welcome" element={<Welcome/>}></Route>
    //   <Route path= "/home" element={<Home/>}></Route>
    // </Routes>
    // </BrowserRouter>
  )
}