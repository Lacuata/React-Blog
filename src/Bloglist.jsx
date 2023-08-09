import { Link } from "react-router-dom";

const Bloglist = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            {/* if blogs.length  is greather than 0 show the title */}
            {blogs.length > 0 && <h2>{title}</h2>}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* gonna Link or redirect to blog.id  */}
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;