import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import Basket from "./components/basket/basket"
import Card from './components/catalog/cards'
import CatalogById from "./components/catalogById/catalogById"
import Catalog from "./pages/catalog/catalog"
import PageMain from "./pages/main/pageMain"
import "./scss/app.scss"

function App() {


  const { items, status } = useSelector((state) => state.product);

  if(!items) return <h1>Loading...</h1>

  return (
    <div className="wrapper">
      <Routes>
        {/* <Route path="/catalog" element={<Catalog />} /> */}


        <Route path="/catalog" element={<Catalog />}>
          <Route path="" element={items.map((item) => <Card key={item.id} {...item} />)} /> 
          <Route path=":id" element={<Card />} /> 
        </Route>


        <Route path="/" element={<PageMain />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalogById/:id" element={<CatalogById />} />
      </Routes>
    </div>
  );
}

export default App;
