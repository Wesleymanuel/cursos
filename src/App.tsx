import './App.css'
import Home from './pages/Home'
import IndividualProduct from '../src/pages/IndividualProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:product' element={<IndividualProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
