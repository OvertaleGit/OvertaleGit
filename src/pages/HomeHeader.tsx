import React from 'react'
import {ImSearch} from "react-icons/im";
import {Link} from 'react-router-dom';

const Header=() => {
    return (
        <header className="App-header">
        <div>
          <Link className='App-logo' to='/'>
              <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="" />
            <span>OVERTALE</span>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/posts/'>Posts</Link>
          </li>
        </ul>
        <button>
          <ImSearch/>
        </button>
      </header>
    )
}

export default Header;