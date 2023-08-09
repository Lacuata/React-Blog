import BlogDetails from './Blogdetails';
import Home from './Home'
import Navbar from './Navbar'
import Create from './create';
import Update from './update';
import './index.css'
// import Bloglist from './Bloglist'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; //import router
import NotFound from './Notfound';







function App() {

  return (
      <>
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/blogs/:id' element={<BlogDetails />} />
                        <Route path='/update/:id' element={<Update />} />
                        {/* if url is not exist redirect to this path */}
                        <Route path='*' element={<NotFound /> } /> 
                    </Routes>
                </div>
            </div>
        </Router>
    </>
  )
}

export default App
