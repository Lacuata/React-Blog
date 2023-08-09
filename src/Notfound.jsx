import {Link} from 'react-router-dom'
// Not found component if the route doesn't exist show this
const NotFound = () => {
    return ( 
        <div className="Notfound">
            <h2>Sorry Page not found.</h2>
            <Link to='/' >Go Back </Link>
        </div>
     );
}
 
export default NotFound;