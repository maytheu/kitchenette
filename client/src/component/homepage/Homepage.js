import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "../../layout/Carousel";
import Header from "../../layout/Header";
import Page from "../../layout/Page";
import View from "../../layout/View";
import Title from "../../layout/Title";
import New from "./New";

import slider1 from "../../assets/img/3phase.jpg";
import slider2 from "../../assets/img/bidspoon.jpg";
import slider3 from "../../assets/img/bixtray.jpg";
import slider4 from "../../assets/img/centerdrawer.jpg";
import slider5 from "../../assets/img/logos.png";
import micro from "../../assets/img/microwave1.jpg";

function Homepage(props) {
  const [slider, setSlider] = useState([]);
  const details = [
    { img: slider1, caption: "slider 1", link: "/category/cabinet" },
    { img: slider2, caption: "slider 2", link: "/category/cabinet" },
    { img: slider3, caption: "slider 3", link: "/category/cabinet" },
    { img: slider4, caption: "Sloder 4", link: "/category/cabinet" },
    { img: slider5, caption: "slider 5", link: "/category/cabinet" },
  ];

  const arrivals = [
    {
      img: slider1,
      link: "Gas",
      text: "Check out our newest gas collections, starting from",
      price: "25,000.00",
    },
    {
      img: slider4,
      link: "Furniture",
      text: "Check out our newest furniture collections, starting from",
      price: "15,000.00",
    },
    {
      img: micro,
      link: "Microwave",
      text: "Check out our newest microwave collections, starting from",
      price: "5,000.00",
    },
    {
      img: slider1,
      link: "Gas",
      text: "Check out our newest gas collections, starting from",
      price: "25,000.00",
    },
    // {
    //   img: slider4,
    //   link: "Furniture",
    //   text: "Check out our newest furniture collections, starting from",
    //   price: "15,000.00",
    // },
    // {
    //   img: micro,
    //   link: "Microwave",
    //   text: "Check out our newest microwave collections, starting from",
    //   price: "5,000.00",
    // },
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
            {slider.length === 0 ? "loading" : <Carousel slider={slider} />}
          </div>
        </View>
        <View direction="column" height="58vh">
          <Title>new Arivals</Title>
          {slider.length === 0 ? "loading" : <New latest={arrivals} />}
        </View>
      </Page>
    </>
  );
}

export default Homepage;
