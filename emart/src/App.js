import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar'
import { Switch, Route } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
