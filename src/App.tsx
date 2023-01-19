import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Carrinho } from './pages/Carrinho'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import './styles/global.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <main className='flex-1 w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
       <Footer />
      </Router>
    </>
  )
}

export default App
