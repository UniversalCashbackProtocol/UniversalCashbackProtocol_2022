import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';
import close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price *10} UCP</p>
			<img
				src={close}
				alt="close"
				onClick={() => removeFromCart(product)}
				className="removeImage"
			/>
		</div>
	);
}

export default OrderItem;