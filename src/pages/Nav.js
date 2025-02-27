import { Container, Grid2 } from "@mui/material";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import "../css/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Container fixed className="nav-container">
        <Grid2 container className="nav-grid">
          <Grid2 size={3}>
            <Link to="/Home" className="nav-link">HOME</Link>
          </Grid2>
          <Grid2 size={3}>
            <Link to="/About" className="nav-link">ABOUT</Link>
          </Grid2>
          <Grid2 size={3}>
            <Link to="/Products" className="nav-link">PRODUCTS</Link>
          </Grid2>
          <Grid2 size={3}>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
          </Grid2>
        </Grid2>
      </Container>

      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Contact" element={<Content/>} />
      </Routes>
    </nav>
  );
}
