import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import Registration from './Pages/Registration'
import LoginPage from "./Pages/LoginPage"
import Contact from "./Pages/Contact";
// import Details from "./Pages/Details";
import "./Stlysheet/product.css"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage /> }/> 
        <Route path="/contact" exact element={<Contact /> }/>
        <Route path="/cartpage" exact element={<CartPage /> }/>
        {/* <Route path="/details/:productid" exact element={<Details /> }/> */}
        <Route path="/registration" exact element={<Registration /> }/>
        
        <Route path="/login" exact element={<LoginPage /> }/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
