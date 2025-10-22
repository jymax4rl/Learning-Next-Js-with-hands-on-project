"use client";
import React, { useState } from "react";
import MyPropertiesPage from "./myPropertiesPage";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([
    { title: "Dakar Property", price: "800", address: "Senegal" },
    { title: "Banjul Reeorts", price: "800", address: "Banjul" },
    { title: "Sierra Lion", price: "800", address: "Free Town" },
    { title: "Guinee Resorts", price: "800", address: "Futa Jallon" },
    { title: "Dakar Property", price: "800", address: "Senegal" },
  ]);
  return (
    <div className="grid grid-cols-3 grid-rows-auto h-screen items-cents justify-center">
      {properties.map((property) => {
        return (
          <MyPropertiesPage
            title={property.title}
            price={property.price}
            address={property.address}
          ></MyPropertiesPage>
        );
      })}
    </div>
  );
};

export default PropertiesPage;
