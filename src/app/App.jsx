import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/catalog";
import PageMain from "../pages/main/pageMain";
import "./app.scss";
import Basket from "@/features/basket/basket";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<PageMain />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
