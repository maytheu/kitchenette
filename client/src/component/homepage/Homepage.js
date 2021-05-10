import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "../../layout/Carousel";
import Header from "../../layout/Header";
import Page from "../../layout/Page";
import View from "../../layout/View";

import slider1 from "../../assets/img/3phase.jpg";
import slider2 from "../../assets/img/bidspoon.jpg";
import slider3 from "../../assets/img/bixtray.jpg";
import slider4 from "../../assets/img/centerdrawer.jpg";
import slider5 from "../../assets/img/logos.png";
import Title from "../../layout/Title";

function Homepage(props) {
  const [slider, setSlider] = useState([]);
  const details = [
    { img: slider1, caption: "slider 1", link: "/category/cabinet" },
    { img: slider2, caption: "slider 2", link: "/category/cabinet" },
    { img: slider3, caption: "slider 3", link: "/category/cabinet" },
    { img: slider4, caption: "Sloder 4", link: "/category/cabinet" },
    { img: slider5, caption: "slider 5", link: "/category/cabinet" },
  ];

  useEffect(() => {
    setSlider(details);
  }, []);
  return (
    <>
      <Header />
      <Page>
        <View>
          <div className="menu-items">
            <ul>
              <li>
                <Link to="/">Pressure Cooker</Link>
              </li>
              <li>
                <Link to="/">Kitchen Furniture</Link>
              </li>
              <li>
                <Link to="/">Toaster and Slicer</Link>
              </li>
              <li>
                <Link to="/">Pot</Link>
              </li>
              <li>
                <Link to="/">Cutlery</Link>
              </li>
              <li>
                <Link to="/">Glass wares</Link>
              </li>
              <li>
                <Link to="/">Tray and Jar</Link>
              </li>
              <li>
                <Link to="/">Microwave</Link>
              </li>
              <li>
                <Link to="/">Pan</Link>
              </li>
              <li>
                <Link to="/">Furniture</Link>
              </li>
            </ul>
          </div>
          <div className="carousel">
            <Carousel slider={slider} />
          </div>
        </View>
        <View><Title></Title></View>
      </Page>
    </>
  );
}

export default Homepage;
