import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url) // fetch the endpoint of your created database
              .then(res => {
                    if(!res.ok){
                        throw Error('Data cannot be received')
                    }
                  return res.json() // parse the response JSON data and return it
                  
                }) 
              .then(data => {
                setData(data);
                setLoading(false)
                setError(null)
              })
              .catch(err => {
               setError(err.message)
               setLoading(false)

              })
            
        }, 1000)
      }, [url]); // Empty dependency array to run the effect only once

    return {data, error, Loading};
}
 
export default UseFetch;