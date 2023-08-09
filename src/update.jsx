import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [title, setTitle]  = useState('')
    const [body, setBody]  = useState('')
    const [author, setAuthor]  = useState('')
    const [Loading, setLoading]  = useState(false)
    const navigateTo = useNavigate();
    const {id} = useParams();


    const handleUpdate = (e) => {
        e.preventDefault();
        const updateBlogs = {title, author, body}

        setLoading(true);
        setTimeout(() => {
            fetch(`http://localhost:8888/blogs/${id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updateBlogs)
            })
            .then(() => {
                console.log('blog was updated.')
                setLoading(false);
                navigateTo(`/blogs/${id}`);
    ;        })

        }, 1000)

        setTitle('');
        setBody('');
        setAuthor('');
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    return ( 
        <div className="update">
            <h2>Update Blog</h2>
            <form onSubmit={handleUpdate}>
                <label htmlFor="">Blog title</label>
                <input
                type="text"
                title="Blog title"
                value={title}
                onChange={handleTitle}
                required />

                <label htmlFor="">Blog Content</label>
                <textarea
                className="scrollbar"
                value={body}
                onChange={handleBody}
                required
                >

                </textarea>
                
                <label htmlFor="">Blog Author</label>
                <input 
                type="text"
                id="name"
                value={author}
                onChange={handleAuthor}
                required
                 />
                 {Loading ? Loading && <button>Updating Blog...</button> 
                 : !Loading && <button>Submit blog</button>}
            </form>
        </div>
     );
}
 
export default Update;