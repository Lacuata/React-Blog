import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Ciaoo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">Add Blogs</a> */}
                <Link to='/'> Home</Link>
                <Link to='/create'> Add Blogs</Link>

            </div>
        </div>
     );
}
 
export default Navbar;