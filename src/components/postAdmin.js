import React from 'react'
import './postAdmin.css'
import HEADER from '../components/headerCoo'
import MANT from '../assets/img/img-mantenimiento.png'
import FOOTER from '../components/footer'

function postAdmin() {
    return (
        <>
            <HEADER/>
            <div className="cont-admin d-flex justify-content-center">
                <img src={MANT} alt="" />
            </div>
            <FOOTER/>
        </>
    )
}

export default postAdmin
