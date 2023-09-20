import React, {useState} from "react";

function PlantCard({plant, name, price, image}) {
  const [inStock , setInStock] = useState(true)
  function handleToogleClick(){
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={image} alt={ name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToogleClick}
        >In Stock</button>
      ) : (
        <button onClick={handleToogleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
