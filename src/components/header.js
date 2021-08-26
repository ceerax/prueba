import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css'


class header extends Component {
    render() {
        return (
            <>
               
                <nav class="navbar navbar-expand-lg navbar-light bg-light bg-dark">
                    <a class="navbar-brand" href="#"><h4>CEERAX</h4> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            <Link className=" txt" to="/user"> <strong>login</strong> </Link>
                            </li>                            
                        </ul>
                        <span class="navbar-text">
                            <h4 className=" txt">Sergio</h4>
                            <h5 className=" txt">Administrador</h5>
                        </span>
                    </div>
                </nav>
            </>
        )
    }
}

export default header