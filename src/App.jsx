import './App.css'
import About from './components/About'
import Categories from './components/Categories'
import Footers from './components/Footers'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <>
    <div className='max-w-5xl mx-auto'>
    <NavigationBar/>
    <Home/>
    <Categories/>
    <About/>
    <Footers/>
    </div>
    </>
  )
}

export default App
