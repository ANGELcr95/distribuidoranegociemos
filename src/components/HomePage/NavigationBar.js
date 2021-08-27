import "../../Styles/HomePageStyle/NavigationBar.css"
import React from 'react';
import { NavLink } from "react-router-dom";


const NavigationBar = () => {
    return (
        <div className="NavigationBar">
            <div className="Nav">
                <div className="LogoNav">este es el logo</div>
                <div className="NavLinks">
                    <NavLink to="/" activeClassName="selectedLink"
                    >Inicio</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Productos</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Nosotros</NavLink>
                    <NavLink to="/" activeClassName="selectedLink"
                    >Contacto</NavLink>
                </div>
                <div className="BuyCar">carro</div>
            </div>
        </div>
    );
};

export default NavigationBar;