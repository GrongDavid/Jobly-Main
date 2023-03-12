import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
	return (
		<div>
			<NavLink to='/companies'>Companies</NavLink>
			<NavLink to='jobs'>jobs</NavLink>
		</div>
	)
}

export default NavBar
