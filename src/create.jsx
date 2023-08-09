import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle]  = useState('')
    const [body, setBody]  = useState('')
    const [author, setAuthor]  = useState('')
    const [Loading, setLoading]  = useState(false)
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, author, body}

        setLoading(true);
        // if handleSubmit is triggered it will submit the form to our url
        setTimeout(() => {
            fetch('http://localhost:8888/blogs', { //end points
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            })
            .then(() => {
                console.log('blog was added.')
                setLoading(false);
                navigateTo('/');
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
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
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
                 />

                <label htmlFor="">Blog Author</label>
                <input 
                type="text"
                id="name"
                value={author}
                onChange={handleAuthor}
                required
                 />
                 {/* condition if Loading is true Adding Blog else add blog */}
                 {Loading ? Loading && <button>Adding Blog...</button> 
                 : !Loading && <button>Add blog</button>}
            </form>
        </div>
     );
}
 
export default Create;