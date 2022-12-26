import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div id="brand">
                Developer Funnel
                &nbsp;&nbsp;<Link className="btn btn-success" to="/">Home</Link>
            </div>
           
            <div id="loginBtn">
                <Link className="btn btn-success" to="/">Login</Link> &nbsp;
                <Link className="btn btn-danger" to="/">Register</Link>
            </div>
        </header>
    )
}

export default Header;