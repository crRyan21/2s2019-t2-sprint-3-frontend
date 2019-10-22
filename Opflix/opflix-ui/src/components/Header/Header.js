import React from 'react';

import logo from '../../assets/img/logoOpflix.png';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Francois+One&display=swap" rel="stylesheet"/>
        </head>
        <header className="topo_container">
            <div className="logo" >
            <img src={logo} alt="" width="130px" height="42.33" />
            </div>
            <nav className="menu" >
                <ul>
                    <li>inicío</li>
                    <li>categorias</li>
                    <li>lançamentos</li>
                    <li>plataformas</li>
                    <div id="log-cadastro">
                    <div id="login" >
                    <li><Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link></li>
                     </div>
                     <div id="cadastro">
                        <li>Cadastro</li>
                    </div>
                     </div>
                </ul>
            </nav>
            </header>
            </div>
    );
}

export default Header;