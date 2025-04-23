import React from "react";
import Main from "../../components/main/main";
import "./catalog.scss";
import CatalogComp from "../../components/catalog/catalogComps";
import Footer from "../../components/main/Footer/footer";
import InfoCatalog from "../../components/catalog/infoCatalog";

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
