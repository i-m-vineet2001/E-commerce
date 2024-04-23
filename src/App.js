
import './App.css';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import LoginSignup from './pages/loginSignup';
import Cart from './pages/cart';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
<Routes>
<Route path='/'element={<Shop/>}/>
<Route path='/mens'element={<ShopCategory/>}/>
<Route path='/Womens'element={<ShopCategory/>}/>
<Route path='/Kids'element={<ShopCategory/> }/>
<Route path="product" element={<Product/>}/>
  <Route path=':productId' element={<Product/>}/>
<Route path='/cart'element={<Cart/>}/>
<Route path='/Login'element={<LoginSignup/>}/>
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
