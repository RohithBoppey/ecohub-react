import React from "react";
import pic from '../Navbar/Animated Leaf Icon final.jpg' 
const AdminNavbar = () => {
	return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#ffffff'}}>
            <div className="container-fluid">
                <img id="logo" src={pic} alt="" width="50" height="36"
                    className="d-inline-block align-text-top" /> <a href="/admin/home" style={{textDecoration: 'none', color: 'black'}}>
                    <b>ECOHUB</b> </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/showusers">Show all Data</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/adduser">Add a new User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/showallmessages">Messages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/send-all-mail">Announce</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Logout</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;