import UseFetch from "./usefetch";
import { useParams, useNavigate, Link } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const navigateTo = useNavigate();
    const {data: blog, error, Loading} = UseFetch('http://localhost:8888/blogs/' + id)

    const handleDelete = (e)=>{
        // delete url id 
        fetch('http://localhost:8888/blogs/' + blog.id, {
            method: 'DELETE',
        })
        .then(() => {
            console.log('Blog was deleted.')
            navigateTo('/')
        })
    }



    return ( 
        <div className="blog-details">
            <h2>Blog - {id}</h2>
            {Loading && <h5>Loading...</h5>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={`/update/${id}`} className="edit-link" >
                        Edit
                    </Link>
                </article>
            )}
            {error && <p>{error}</p>}
        </div>
     );
}
 
export default BlogDetails;