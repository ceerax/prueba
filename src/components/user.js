import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './post.css'

function User() {
    let history = useHistory();
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    return (
        <>
            <form className=" cont-form  d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className=" col-12 inter ">
                        <div className="form-group ">
                            <h2 className="mb-3"> <strong>Iniciar seción</strong></h2>
                            <label for="exampleInputEmail1">Usuario</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name  " aria-describedby="emailHelp" value={nombre} onChange={(e) => { setNombre(e.target.value) }} required="required" />
                            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
                        </div>
                        <div class="form-group mb-5">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" value={contraseña} onChange={(e) => { setContraseña(e.target.value) }} required="required" />
                            
                        </div>
                            
                        

                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <button onClick={() => { inicioSeccion() }} type="submit" class="btn btn-dark" >INICIAR SESIÓN</button>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <Link to="/register">Registrate</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
    function inicioSeccion() {
        if (nombre === "sergio@prueba" && contraseña === "1234") {
            history.push('/post')
        } else if (nombre === "cesar@prueba" && contraseña === "1234") {
            history.push('/postAdmin')
        } else {
            alert("usuario no registrado")
        }

    }
};

export default User