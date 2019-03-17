import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about" activeClassName={'active'}>About</NavLink>
			<NavLink to="/contact" activeClassName={'active'}>Contact</NavLink>
		</div>
	);
};

export default Navigation;
