import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png'
import {
    Link
} from "react-router-dom";
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand" >
                    <img src={logo} alt="Logo" style={{ width: '200px' }}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link mr-5">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5">Connect Us</Link>
                        </li>
                        <li className="nav-item">
                            {
                                loggedInUser.email ?
                                    <button className="btn btn-dark pl-4 pr-4 mr-5" onClick={() => setLoggedInUser({})}>Logout</button>
                                    :
                                    <Link to="/login"><button className="btn btn-dark pl-4 pr-4 mr-5" type="submit">Login</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;