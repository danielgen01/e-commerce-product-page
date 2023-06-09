import './App.css'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import Caption from './components/Caption'
import { useState } from 'react'

function App() {

  const [cartItems,setCartItems] = useState([])

  return (
    <div className='overflow-x-hidden'>
      <Header cartItems={cartItems} setCartItems={setCartItems}/>
      <div className="layout grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
      <ImageCarousel />
      <Caption cartItems={cartItems} setCartItems={setCartItems}/>
      </div>
      
  
    </div>
  )
}

export default App
