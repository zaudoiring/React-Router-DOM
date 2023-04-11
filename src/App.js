import { BrowserRouter, Routes ,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Dashboard from "./Pages/Dashboard";
import ShareLayout from "./components/ShareLayout";
import "./App.css"
import SingleProduct from "./Pages/SingleProduct";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import { useState } from "react";
import ProtectRoute from "./components/ProtectRoute";






function App() {
 const [user, setUser]= useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <h3>React Router DOM</h3>
 
        
        <Routes>
          <Route path="/" element={<ShareLayout/>} >
              <Route index element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<SingleProduct />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
            </Route>
          <Route path="/dashboard" element={
          <ProtectRoute user={user}>
            <Dashboard user={user} />
          </ProtectRoute>
          } >
             <Route path="user" element ={ <h2>User </h2>} />
             <Route path="profile" element ={ <h2>Profile </h2>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
