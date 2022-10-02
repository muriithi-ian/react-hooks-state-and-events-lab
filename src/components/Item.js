import React, { useState } from "react";

function Item({ name, category }) {
	const [inCart, setInCart] = useState(false);

	const itemClass = inCart ? "in-cart" : "";

	const handleAddToCart = () => {
		setInCart(!inCart);
	};

	return (
		<li className={itemClass}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button className="add" onClick={handleAddToCart}>
				Add to Cart
			</button>
		</li>
	);
}

export default Item;
