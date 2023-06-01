import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
        </nav>
    )
}

export default Nav