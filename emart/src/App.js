import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar'
import { Switch, Route } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';
import Checkout from './component/Checkout';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
