// Libs...
import { createContext, lazy, Suspense, useContext, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const queryClient = new QueryClient()

// Componentes que sempre estão em tela...
import { Footer } from './components/Footer'
import { Header } from './components/Header'

// Páginas, que nem sempre estão em tela...
const Carrinho = lazy(() => import('./pages/Carrinho'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Produtos = lazy(() => import('./pages/Produtos'))
const Cadastro = lazy(() => import('./pages/Cadastro'))

// Estilos...
import './styles/global.css'

function App() {

  const [pesquisa, setPesquisa] = useState<string>('')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header setPesquisa={setPesquisa} />
          <main className='flex-1 w-full'>
            <Suspense fallback={<div>Carregando.....</div>}>
              <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/carrinho' element={<Carrinho />} />
                <Route path='/login' element={<Login />} />
                <Route path='/produtos' element={<Produtos pesquisa={pesquisa} />} />
                <Route path='/cadastro' element={<Cadastro />} />
              </Routes>
            </Suspense>
          </main>
        <Footer />
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
