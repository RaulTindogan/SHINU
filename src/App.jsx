import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import ScrollToTop from './components/ScrollToTop'
import Products from './pages/ProductsPage'
import Page404 from './pages/Page404'

function App() {

  return (
    <>
     <Router basename={"/SHINU/"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path='/products/:productId' element={<Products />}/>
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </Router>
        
    </>
      
  )
}

export default App
