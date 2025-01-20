import React from "react";
import carsList from "../carsList";
export default function Cars() {
  const carsEl = carsList.map((car) => {
    return (
      <div key={car.id} className="car-title">
        <img src={car.img} />
        <div className="car-info">
          <h3>{car.name}</h3>
          <p>
            <span>Price: {car.price} /day </span>
          </p>
          <p>Type: {car.type}</p>
          <p>Deposit: {car.deposit} </p>
        </div>
        <i className="car-category">{car.category}</i>
      </div>
    );
  });
  return (
    <div className="car-list-container">
      <h1>Explore our car options</h1>
      <div className="car-list">{carsEl}</div>
    </div>
  );
}
