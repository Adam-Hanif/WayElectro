import CatalogComps from "@/features/catalog/ui/catalogCard/catalogComps";
import InfoCatalog from "@/features/catalog/ui/catalogLayout/infoCatalog/infoCatalog";

import Footer from "@/shared/ui/Footer/footer";
import Main from "@/shared/ui/main/main";

function Catalog() {
  return (
    <div>
      <Main />
      <div id="catalog" className="block_catalog container">
        <InfoCatalog />
        <CatalogComps />
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
