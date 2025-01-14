
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnff from './pages/Pnff'
import Footer from'./components/Footer'


function App() {
  

  return (
     <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pnff/>}/>
     </Routes>
    <Footer/>
    </>
  
  )
}

export default App
