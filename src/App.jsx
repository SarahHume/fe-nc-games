import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Categories from './components/Categories';
import ReviewList from './components/ReviewList';
import Review from './components/Review';

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/categories" element = {<Categories/>}/>
      <Route path = "/reviews" element = {<ReviewList/>}/>
      <Route path = "/reviews/:reviewId" element = {<Review/>}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App
