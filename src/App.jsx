import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Posts from './Pages/Posts.jsx'
import About from './Pages/About.jsx'

function App() {
  return (
    <div className='min-h-screen w-full relative overflow-hidden'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:productId' element={<SingleProduct />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
