import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
 