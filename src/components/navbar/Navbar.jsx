import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navContainer">
				<Link to="/" className="logo">
					<h1> marsbooking </h1>
				</Link>
				<div className="navItems">
					<button className="btn btn-light">Register</button>
					<button className="btn btn-light">Login</button>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
