import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/login">Affiliate</a>
				</li>
				<li>
					<a href="">+ Connect Wallet</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;