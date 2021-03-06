import "./App.css";
import MainPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout";
import Catalog from "./components/Catalog/Catalog";
import ItemPage from "./components/ItemPage/ItemPage";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="catalog"  element={<Catalog/>} />
          <Route path="catalog/:id" element={<ItemPage/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
