import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Categories from './components/Categories';
import Reviews from './components/Reviews';

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/categories" element = {<Categories/>}/>
      <Route path = "/reviews" element = {<Reviews/>}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App
