import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from './components'

import { Home, Products, SingleProduct, About, Checkout, PrivateRoute, Error, Cart , AuthWrapper } from './pages'


function App() {

  return <div >
    <AuthWrapper >

    
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route end path='/' element={
          <Home />
        } />
        <Route end path='/about' element={
          <About />
        } />
        <Route end path='/cart' element={
          <Cart />
        } />
        <Route end path='/products' element={
          <Products />
        } />
        <Route end path='/products/:id' element={
          <SingleProduct />
        } />
        <Route end path='/checkout' element={
          <PrivateRoute >
            <Checkout />
          </PrivateRoute>
        } />
        <Route end path='/*' element={
          <Error />
        } />
      </Routes>
      <Footer/>
    </Router>
    </AuthWrapper>
  </div>


}

export default App
