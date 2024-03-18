import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithCssGrid from "./views/WithCssGrid";
import WithCssGridPolaris from "./views/WithCssGridPolaris";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/withcssgrid" element={<WithCssGrid />} />
        <Route path="/withpolarisgridcss" element={<WithCssGridPolaris />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
