import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/Homepage";
import ProductListingPage from "../pages/ProductListingPage/Productlistingpage";
import ProductViewPage from "../pages/ProductViewPage/Productviewpage";
import Header from "../components/Header";
import Layout from "../pages/PageLayout/Layout";
import NotFound from "../pages/NotFound/NotFound";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produtos/:id/:nome" element={<ProductViewPage />} />
        </Route>
        <Route path="*" element  = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
