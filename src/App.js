//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
import Home from "./pages/Home";

//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
    {/*       <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
           */}
          {/*  <Route path="home" element={<Home />} /> */}
          {/* <Route path="*" element={<NoPage />} />
         */}
         </Route>
      </Routes>
    </BrowserRouter>
  
  );
}


export default App;
