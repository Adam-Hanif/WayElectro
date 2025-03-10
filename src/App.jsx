import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/catalog/catalog";
import PageMain from "./pages/main/pageMain";
import "./scss/app.scss";
import Basket from "./components/basket/basket";
import CatalogById from "./components/catalogById/catalogById";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<PageMain />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalogById/:id" element={<CatalogById />} />
      </Routes>
    </div>
  );
}

export default App;
