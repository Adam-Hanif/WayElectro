import Advantage from "./ui/Advantage/Advantage";
import Footer from "../../shared/ui/Footer/footer";
import Range from "./ui/Range/range";
import { SimpleSlider } from "./ui/SlickSlider";
import Contact from "./ui/contacts/contact";
import Main from "../../shared/ui/main/main";
import React from "react";
import MainBurger from "../../shared/ui/mainBurger/burger";

function pageMain() {
  const [burgerActive, setBurgerActive] = React.useState(false);

  return (
    <div>
      <div className="container">
        <MainBurger
          burgerActive={burgerActive}
          setBurgerActive={setBurgerActive}
        />
        <Main />
        <SimpleSlider />
        <Range />
      </div>

      <div className="bg_advantage">
        <div id="section1" className="container">
          <Advantage />
        </div>
      </div>
      <div id="section2" className="container">
        <Contact />
      </div>
      <div className="footer_bg">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default pageMain;
