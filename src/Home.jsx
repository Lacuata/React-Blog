import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import UseFetch from "./usefetch";

const Home = () => {
    const {data:blogs, error, Loading} = UseFetch('  http://localhost:8888/blogs')


    return ( 
        <div className="home">
            {Loading && <h5>Loading..</h5>}
            {error && <h5>{error}</h5>}
          {blogs && <Bloglist blogs={blogs} title='All Blogs' />}
        </div>
     );
}
 
export default Home;