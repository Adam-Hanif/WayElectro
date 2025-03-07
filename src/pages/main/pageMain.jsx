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

  const scrollToTarget = () => {
    Advantages.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToContact = () => {
    csrollCont.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const csrollCont = React.createRef();
  const Advantages = React.createRef();
  return (
    <div>
      <div className="container">
        <MainBurger
          burgerActive={burgerActive}
          setBurgerActive={setBurgerActive}
        />
        <Main
          burgerActive={burgerActive}
          setBurgerActive={setBurgerActive}
          scrollToTarget={scrollToTarget}
          scrollToContact={scrollToContact}
        />
        <SimpleSlider />
        <Range />
      </div>

      <div className="bg_advantage">
        <div className="container">
          <Advantage Advantages={Advantages} />
        </div>
      </div>
      <div className="container">
        <Contact Advantages={csrollCont} />
      </div>
      <div className="footer_bg">
        <div className="container">
          <Footer
            scrollToTarget={scrollToTarget}
            scrollToContact={scrollToContact}
          />
        </div>
      </div>
    </div>
  );
}

export default pageMain;
