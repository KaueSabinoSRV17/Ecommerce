import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Carrinho } from './pages/Carrinho'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Produtos } from './pages/Produtos'
import './styles/global.css'

export interface ComponenteComAcessoAosProdutosProcurados {
  setProdutosProcurados(pesquisa: string): void,
}

export interface ComponenteQueRecebeProdutosProcurados {
  produtosProcurados: string | undefined
}

function App() {

  const [produtosProcurados, setProdutosProcurados] = useState<string>()

  return (
    <>
      <Router>
        <Header setProdutosProcurados={setProdutosProcurados} />
        <main className='flex-1 w-full'>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/login' element={<Login setProdutosProcurados={setProdutosProcurados} />} />
            <Route path='/produtos' element={<Produtos produtosProcurados={produtosProcurados} />} />
          </Routes>
        </main>
       <Footer />
      </Router>
    </>
  )
}

export default App
