import React,{Component} from 'react';

import '../../assets/css/login.css';
import '../../assets/css/lancamentos.css';

import './App.css';


import banner from '../../assets/img/banner.jpg';
import logo from '../../assets/img/logoOpflix.png';
import Rambo from '../../assets/img/Rambo.jpg';
import Miranha from '../../assets/img/Miranha.jpg';
import Coringa from '../../assets/img/Coringa.jpg';
import ItCoisa from '../../assets/img/ItCoisa.jpg';
import Avengers from '../../assets/img/Avengers.jpg';
import ReiLeao from '../../assets/img/ReiLeao.jpg';
import CincoPassos from '../../assets/img/5passos.jpg';
import Favicon from '../../assets/img/Sem Título-1.png';


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


import {Link} from 'react-router-dom';
import Axios from 'axios';

export default class App extends Component {

        constructor(){
            super();
            this.state = {
                lista: []
            };
        }

        componentDidMount(){
            Axios.get('https://192.168.4.183:5000/api/lancamentos')
                .then(data =>{
                    this.setState({lista: data.data});
                })
                    .catch(erro =>{
                        console.log(erro)
                    });
        }

    render(){   
  return (
    <div>
    <link rel="shortcut icon" type="image/x-icon" href={Favicon}/>
         
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Francois+One&display=swap" rel="stylesheet"/>
        
        <header className="topo_container">
            <div className="logo" >
            <img src={logo} alt="" width="130px" height="42.33" />
            </div>
            <nav className="menu" >
                <ul>
                    <li><Link to='/' >inicío</Link></li>
                    <li>categorias</li>
                    <li><Link className="cabecalhoPrincipal-nav-login" to="/lancamentos">lancamentos</Link></li>
                    <li>plataformas</li>
                    <div id="log-cadastro">
                    <div id="login" >
                    <li><Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link></li>
                     </div>
                     <div id="cadastro">
                        <li><Link to="/cadastro" >Cadastro</Link></li>
                    </div>
                     </div>
                </ul>
            </nav>
            </header>
        <section className="banner" > 
            <img src={banner} alt="" width="100%" height="600.5px" />
            <div className="campo_pesquisa">
                <div id="logozinho">
                <img src={logo} alt="" width="130px" height="42.33" />
        
                        
                </div>
                <div id="input_pesquisa" >
                        <input type="text" placeholder="Pesquise por filmes, séries ou animes"/>
                         
                </div>
            </div>
        </section>
        <section className="lancamentos_container" >
                   <h2>Lançamentos</h2>
                <div className="lancamentos_coluna" >
                    <img src={Rambo} alt=""   />
                    <img src={Miranha} alt=""  />
                    <img src={Coringa} alt=""   />
                    <img src={ItCoisa} alt=""  />
                    <img src={Avengers} alt=""  />
                    <img src={CincoPassos} alt=""   />
                    <img src={ReiLeao} alt="" />
                    

                </div>
            </section>
            <Footer/>
    
</div>
  );
    }
}


