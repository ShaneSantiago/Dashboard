import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Kanban from "../Pages/Chat/Kanban";
import Vendas from "../Pages/Vendas/Vendas";
import Carrinhos from "../Pages/Carrinhos/Carrinhos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Kanban />} />
      <Route path="/vendas" element={<Vendas />} />
      <Route path="/carrinho" element={<Carrinhos />} />
    </Routes>
  );
};

export default AppRoutes;
