import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import Registration from './Pages/Registration'
import LoginPage from "./Pages/LoginPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage /> }/>
        <Route path="/product" exact element={<ProductPage /> }/>
        <Route path="/cartpage" exact element={<CartPage /> }/>
        <Route path="/registration" exact element={<Registration /> }/>
        <Route path="/login" exact element={<LoginPage /> }/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
