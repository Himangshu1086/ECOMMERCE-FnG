
import Header from './components/Header';
import Home from './components/Home__Page/Home';
import Checkout from './components/Checkout__Page/Checkout'
import Footer from './components/Footer/Footer';
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Sign_In from './components/Sign__In__Page/Sign_In';
import Sign_Up from './components/Sign__In__Page/Sign_Up';
import createProduct from './components/Admin/createProduct';




function App() {

  return (
    <Router>   
      <div className="app">
      <Header/>

        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          
          <Route path="/signIn">
            <Sign_In/>
          </Route> 
          <Route path="/createAccount">
            <Sign_Up/>
          </Route>
          <Route path="/admin">
            <createProduct/>
          </Route>

          
          <Route path="/" >
              <Home/>
          </Route>   
          
        </Switch>
        

      {/* <Footer/> */}
    </div>
    
    </Router>
    
  );
}

export default App;
