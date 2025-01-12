
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnff from './pages/Pnff'


function App() {
  

  return (
     <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Cart/>}/>
      <Route path='/cart' element={<Wishlist/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pnff/>}/>
     </Routes>
    </>
  )
}

export default App
