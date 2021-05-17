import React from "react";
import { Link } from "react-router-dom";

function New(props) {
  return (
    <div className="arrivals">
      {props.latest.map((arrival, i) => (
        <div className="arrival" key={i}>
          <div className="arrival-img">
            <img src={arrival.img} alt={arrival.link} />
            <div className="arrival-view">
              <div className="arrival-click">
                <Link to="/">View new {arrival.link}</Link>
              </div>
            </div>
          </div>
          <div className="arrival-details">
            <div className="arrival-collection">
              <h4>New {arrival.link} Collections</h4>
            </div>
            <div className="arrival-text">{arrival.text} </div>
            <div className="arrival-price">&#8358;{arrival.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default New;
