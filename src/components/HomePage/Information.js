import "../../Styles/HomePageStyle/Information.css"
import React from 'react';

const Information = () => {
    return (
        <div className="Information">
            <div className="NetworkInformation">
                <a href={'https://www.google.com/maps'}>Rastrea mi pedido</a>
                <p>PBX: 57 (2) 386 5770</p>
                <span>Siguenos en <img src={"https://es-la.facebook.com/"} alt="Facebook"></img><img src={"https://www.instagram.com/?hl=es/"} alt="Instagram"></img></span>
            </div>
            <div className="Loginbtn">
                <button>Inciar Sesion</button>
            </div>

            
        </div>
    );
};

export default Information;