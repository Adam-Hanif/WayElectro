import React from "react";
import "./catalogById.scss";
import Main from "../main/main";
import InfoCatalog from "../catalog/infoCatalog";
import Feedback from "../main/contacts/feedback";
import Footer from "../main/Footer/footer";
function CatalogById() {
  return (
    <div>
      <div className="container">
        <Main />
        <InfoCatalog />
        <Feedback />
      </div>
      <div className="footer_bg">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CatalogById;
