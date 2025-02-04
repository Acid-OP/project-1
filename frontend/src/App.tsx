import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Signup } from './pages/signup'
import { Signin } from './pages/Signin'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'

function App() {
 

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path= "/signup" element={<Signup/>}></Route>
      <Route path= "/signin" element={<Signin/>}></Route>
      <Route path= "/welcome" element={<Welcome/>}></Route>
      <Route path= "/home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
