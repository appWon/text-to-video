import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "../styles";

export const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes></Routes>
    </BrowserRouter>
  );
};
