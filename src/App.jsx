import { BrowserRouter,Routes,Route, HashRouter } from "react-router-dom"

import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>   
    </HashRouter>
  )
}

export default App
