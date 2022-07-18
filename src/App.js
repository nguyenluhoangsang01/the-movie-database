import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "swiper/css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
