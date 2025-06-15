import React from "react";
import Main from "../../widgets/main/main";
import "./catalog.scss";
import CatalogComp from "./ui/catalogComps/catalogComps";
import Footer from "../../widgets/Footer/footer";
import InfoCatalog from "./ui/infoCatalog/infoCatalog";

function Catalog() {
  return (
    <div>
      <Main />
      <div id="catalog" className="block_catalog container">
        <InfoCatalog />
        <CatalogComp />
      </div>
      <div className="footer_bg">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
