import React from 'react';
import './header.css'

const Header = () => {
    return(
        <header>
            <div id="brand">
                Developer Funnel
            </div>
            <div id="loginBtn">
                <button>Login</button>
                <button>Register</button>
            </div>
        </header>
    )
}

export default Header;