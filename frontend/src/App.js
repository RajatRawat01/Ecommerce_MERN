import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App(){
    return(
      <Router>
         <div className="grid-container">
              <header className="row">
                  <div>
                      <Link to="/" className="brand" exact strict>AshokIT</Link>
                  </div>
                  <div>
                      <Link to="/signin" exact strict>SignIn</Link>
                      <Link to="/cart" exact strict>Cart</Link>
                  </div>
              </header>

              <main>
                  <Route path="/" component={HomeScreen} exact strict />
                  <Route path="/product/:id" component={ProductScreen} exact strict></Route>  
                  <Route path="/cart/:id?" component={CartScreen} exact strict></Route>  
              </main>

              <footer className="row center">
                  All Rights are Reserved
              </footer>

              
         </div>

         

      </Router>
    )
};
export default App;
