import React from "react";

const MyPropertiesPage = ({ title, address, price, image, link }) => {
  return (
    <div className="h-72 rounded-xl ring-1 ring-blue-100 shadow-lg shadow-gray-250 m-2.5">
      <h1>{title}</h1>
      <h3>price: {price}</h3>
      <div>{address}</div>
      <button>View property</button>
    </div>
  );
};

export default MyPropertiesPage;
