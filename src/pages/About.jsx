import React from "react";
import { Link } from "react-router-dom";
import old from "../images/oldCar.jpg";
export default function About() {
  const [showMore, setShowMore] = React.useState(false);
  function toggle() {
    setShowMore(!showMore);
  }
  return (
    <div className="About-Container">
      <img
        src={old}
        className="About-Image"
        alt="Classic car showcasing CarZee's heritage"
      />
      <div className="About-Content">
        <h1>About CarZee </h1>
        <p>
          At CarZee, we're passionate about providing the best car rental
          services that are fast, easy, and reliable.
        </p>
        {showMore && (
          <p>
            We understand that having the right vehicle for your journey makes
            all the difference. Whether you're traveling for business, going on
            a vacation, we have a wide range of vehicles that are perfect for
            all your needs.
          </p>
        )}
        <button
          className="About-Show-Btn"
          aria-expanded={{ showMore }}
          onClick={toggle}
        >
          {showMore ? "Show Less" : "Read More"}{" "}
        </button>
      </div>
      <div className="Inside-About">
        <h2>
          Ready to find the <br /> perfect ride?
        </h2>
        <Link className="About-Link" to="/cars">
          Explore Our Fleet
        </Link>
      </div>
    </div>
  );
}
