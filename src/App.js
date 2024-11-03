import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";  // Login 파일 경로가 맞는지 확인하세요.
import ForgotPassword from "./main/ForgotPassword";  // ForgotPassword 파일 경로가 맞는지 확인하세요.
import Join from './main/Join';
import Text from './main/Text';
import Login from './main/Login';
import Main  from "./main/Main.jsx";
import Header from "./main/Header.jsx";
import Footer from "./main/Footer.jsx";

const App = () => {
    return (
      <BrowserRouter>
      
        {/*<NavBar /> */}
        
        <Header attr={"header__wrap"} />
      
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/text" element={<Text />} />
          <Route path="/join" element={<Join />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
        </Routes>
       
      <Footer attr={"footer__wrap"} />
      </BrowserRouter>
    );
  };
  
export default App;
