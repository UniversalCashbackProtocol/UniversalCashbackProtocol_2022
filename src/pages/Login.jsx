import React, { useRef } from 'react';
import '../styles/Login.scss';

import logo from '@logos/logo_ucp_officialsvg.svg';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            address: formData.get('address'),
        };
        console.log(data);
    }

    return (
		<div className="login">
			<div className="login-container">
				<h1>Affiliate Company</h1>
				<img src={logo} alt="logo" className="login-logo"/>
				<form action="/" className="form" ref={form}>
					<label htmlFor="name" className="label">Name Company</label>
					<input type="text" name="name" className="input" />
					<label htmlFor="address" className="label">Address</label>
					<input type="text" name="address" className="input" />
					<a href="/create">
						<input type="submit" value="Confirm" className="primary-button login-button" onClick={handleSubmit}  />
					</a>
				</form>
			</div>
		</div >
	);
}

export default Login;