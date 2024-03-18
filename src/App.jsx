import "./App.css";
import Nav from "./components/Nav/Nav";
import Accordian from "./components/accordian/Accordian";
import StarRating from "./components/star-rating/StarRating";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Mission from "./pages/about/Mission";
import Reviews from "./pages/about/Reviews";
import Team from "./pages/about/Team";
import Products from "./pages/products/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/*   <Accordian /> */}
      {/* <StarRating /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        {/*  <Route path="/products/:productId" element={<ProductDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
