import './App.css'
import Header from './components/Header'
import ImageCarousel from './components/ImageCarousel'
import Caption from './components/Caption'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Header />

      <div className="layout grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
      <ImageCarousel />
      <Caption />
      </div>
  
    </div>
  )
}

export default App
