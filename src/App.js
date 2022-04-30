import "./App.css";
import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Home";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <ItemListContainer />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
}

export default App;
