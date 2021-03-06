import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home.Component.jsx";
import Navigation from "./Routes/Navigation/Navigation.Component.jsx";
import Authentication from "./Routes/Authentication/Authentication.Component.jsx";
import Shop from "./Routes/Shop/Shop.Component.jsx";
import Checkout from "./Routes/Checkout/Checkout.Component.jsx";

// Main App Component
const App = () => {
  return (
    //  Mian Routes component
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
