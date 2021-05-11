import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
const Navbar = () => {
	return (
		<nav className='bg-blue-600 flex py-2 items-center'>
			<ul className='flex'>
				<li className='text-white text-lg hover:underline mx-4'>
					<Link to='/'>Movies</Link>
				</li>
				<li className='text-white text-lg hover:underline mx-4'>
					<Link to='/actors'>Actors</Link>
				</li>
			</ul>
			<Search />
		</nav>
	);
};

export default Navbar;
