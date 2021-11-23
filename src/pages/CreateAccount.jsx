import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {

	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Submit Product</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name Product</label>
						<input type="text" id="name" className="input " />
						<label for="price" className="label">Price</label>
						<input type="number" id="price"  className="input " />
						<label for="start-date" className="label">Start Date</label>
						<input type="date" id="start-date" className="input " />
						<label for="end-date" className="label">End Date</label>
						<input type="date" id="end-date" className="input " />
					</div>
					<figure>
						<img src="../assets/icons/Captura.PNG" alt="" />
					</figure>
					<a href="/">
						<input type="submit" value="Submit Product" className="primary-button login-button"  />
					</a>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;