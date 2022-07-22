import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesList from "./routes";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      {/* Global Style */}
      <GlobalStyle />

      {/* Components */}
      <Header />

      <RoutesList />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
