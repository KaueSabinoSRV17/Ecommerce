import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import './styles/global.css'

const Carrinho = lazy(() => import('./pages/Carrinho'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Produtos = lazy(() => import('./pages/Produtos'))

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
          <Suspense fallback={<div>Carregando.....</div>}>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/carrinho' element={<Carrinho />} />
              <Route path='/login' element={<Login setProdutosProcurados={setProdutosProcurados} />} />
              <Route path='/produtos' element={<Produtos produtosProcurados={produtosProcurados} />} />
            </Routes>
          </Suspense>
        </main>
       <Footer />
      </Router>
    </>
  )
}

export default App
