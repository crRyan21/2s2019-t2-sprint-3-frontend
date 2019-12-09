import React,{Component} from 'react';


import Axios from 'axios';
import Header from '../../components/Header/Header';
import banner from '../../assets/img/banner.jpg';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logoOpflix.png';
import Rambo from '../../assets/img/Rambo.jpg';
import Miranha from '../../assets/img/Miranha.jpg';
import Coringa from '../../assets/img/Coringa.jpg';
import ItCoisa from '../../assets/img/ItCoisa.jpg';
import Avengers from '../../assets/img/Avengers.jpg';
import CincoPassos from '../../assets/img/5passos.jpg';
import ReiLeao from '../../assets/img/ReiLeao.jpg';

import Footer from '../../components/Footer/Footer';
import { parseJwt } from "../../services/auth";


export default class Lancamentos extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            listaCategoria:[],
            
        };
    }

    componentDidMount(){
        this.setState({permissao: parseJwt().Permissao})
        this.listaAtualizada();
        this.listaAtualizadaCategoria();
    }
    
    listaAtualizada =() =>{
        // let headers = new Headers();
        // headers.set('Authorization', 'Bearer ' + localStorage.getItem('usuario-opflix'))

        // fetch('http://localhost:5000/api/lancamentos',{
        //     method: 'GET',
        //     headers: headers
        // })
        //     .then(response => response.json())
        //     .then(data => this.setState({lista: data}))
        Axios.get('http://192.168.4.183:5000/api/lancamentos',{
            headers:{ Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')}
        }
        )
        .then(response => {
            this.setState({lista: response.data})
            console.log(this.state)
        })
    }
    listaAtualizadaCategoria = () =>{
        Axios.get('http://192.168.4.183:5000/api/categorias',{
            headers:{ Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')}
        }
        )
        .then(response => {
            this.setState({listaCategoria: response.data})
            console.log(this.state)
        })
    }

    adicionaItem =(event) => {
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://192.168.4.183:5000/api/lancamentos',{
            method: 'POST',
            body: JSON.stringify({nome: this.state.nome}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))

    }

    render(){
        return(
           <div>
                
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
               <main>
                   <section id="lancamentos">
                       
                        {this.state.lista.map(element =>{
                            return(
                                
                                <div className="filmes_lancamento" >
                                    <div className="filmes_nome" >
                                        <p>{element.nome}</p>
                                    </div>
                                    <div className="filmes_info">
                                    <div className="filmes_img" >
                                        <img src={element.imagem}/>
                                    </div>
                                    <div className="filmes_column" >
                                    <div className="info2_row" >

                                       <div className="genero" >
                                        <p>{element.idCategoriaNavigation.nome}</p>
                                       </div>
                                        <div className="lancamento" >  
                                        <p>{element.estreia}</p>
                                        </div>
                                        </div>

                                        <div className="sinopse" >
                                            <p>{element.sinopse}</p>
                                        </div>
                                    <div className="info_row" >
                                        <div className="duracao" >
                                            <p>Duração: {element.duracao}</p>
                                        </div>
                                        <div className="plataforma">
                                            <p>Plataforma: {element.idPlataformNavigation.nome}</p>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                     
                                </div>
                                
                            )
                        })}
                        
                           <li><Link className="cadastrarLancamento" to="/cadastrarLancamento">Cadastrar Lancamento</Link></li>
                           <li><Link className="cadastrarLancamento" to="/mapa">Encontrar Local</Link></li>

                       
                   </section>

               </main>
               <Footer/>

           </div>
        );
    }
}

// export default Eventos;