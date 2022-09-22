import React,{useState}  from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const addToCart = ()=>{
    setInCart(true);
    
  }

  return (
    <li className={inCart ? 'in-cart': null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;