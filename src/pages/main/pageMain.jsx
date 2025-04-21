import Advantage from "../../components/main/Advantage/Advantage";
import Footer from "../../components/main/Footer/footer";
import Range from "../../components/main/Range/range";
import SimpleSlider from "../../components/main/Slick Slider/SliderHeader";
import Contact from "../../components/main/contacts/contact";
import Main from "../../components/main/main";
import React from "react";
import MainBurger from "../../components/mainBurger/burger";

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
