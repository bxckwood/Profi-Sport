import "./App.css";
import MainPage from "./components/FirstPage/FirstPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog"  element={<Catalog/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
