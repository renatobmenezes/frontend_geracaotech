import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Header from "../components/Header";
import Layout from "../pages/PageLayout/Layout";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produtos/:id" element={<ProductViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
