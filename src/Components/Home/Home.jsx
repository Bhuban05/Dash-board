import React from 'react'
import {createBrowserRouter,Link,NavLink} from 'react-router-dom'

function Home() {
  return (
    <nav>


    <Link to="/Navbar"><li>Navbar</li>  </Link>
    <Link to="/Sidebar"><li>SIdebar</li>  </Link>
    <Link to="/Main"> <li>Main</li>  </Link>
    

</nav>
  )
}

export default Home