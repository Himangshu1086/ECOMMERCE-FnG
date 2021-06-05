
import Header from './components/Header';
import Home from './components/Home__Page/Home';
import Checkout from './components/Checkout__Page/Checkout'
import Footer from './components/Footer/Footer';
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Sign_In from './components/Sign__In__Page/Sign_In';
import Sign_Up from './components/Sign__In__Page/Sign_Up';
import CreateProduct from './components/Admin/CreateProduct';
import Account from './components/Account/Account';
import ProductDesp from './components/DynamicRoutes/ProductDesp';
import PageNotFound from './components/PageNotFound';


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
            <CreateProduct/>
          </Route>
          <Route path="/account">
            <Account/>
          </Route> 
          <Route path="/product/:id">
            <ProductDesp/>
            </Route>        
          <Route path="/" exact={true}>
              <Home/>
          </Route>   
          <Route path="*" exact={true} >
              <PageNotFound/>
            </Route>
          
        </Switch>
        

      {/* <Footer/> */}
    </div>
    
    </Router>
    
  );
}

export default App;
