import './App.css';
import Gallary from './component/Gallary';
import Login from './component/login/login'
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Loginpg from './component/loginpage/Loginpg';
import Arival from './component/auto coo/arival';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { startTransition } from 'react';





function App() {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Login />}> */}
          <Route path="/" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/arival" element={<Arival />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/loging" element={<Loginpg />} />
        {/* </Route> */}
      </Routes>

    </BrowserRouter>
    // <Footer/>

  )
}

export default App;
