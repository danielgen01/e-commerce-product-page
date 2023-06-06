import './App.css'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import Main from './components/Caption'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <ImageCarousel />
      <Main />
  
    </div>
  )
}

export default App
