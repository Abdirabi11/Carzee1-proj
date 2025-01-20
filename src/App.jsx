import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Cars from "./pages/Cars";
import { makeServer } from "./mirage/server";
export default function App() {
  if (process.env.NODE_ENV === "development") {
    makeServer(); // Start the Mirage server only in development
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cars" element={<Cars />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
