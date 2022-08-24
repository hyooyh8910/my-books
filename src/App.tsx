import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Signin from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/book/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
