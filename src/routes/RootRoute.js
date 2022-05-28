import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import AddUser from "../pages/User/AddUser";
import DetailUser from "../pages/User/DetailUser";
import Home from "../pages/Home";
import ProductManagement from "../pages/Product";
import ProductDetail from "../pages/Product/ProductDetail";
import Datatable from "../pages/User";
import Order from "../pages/Order";
import Supplier from "../pages/Supplier";
import AddProduct from "../pages/Supplier/AddProduct";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<Datatable />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-detail" element={<DetailUser />} />
          <Route path="/product" element={<ProductManagement />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default RootRoute;
