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


export default class CadastrarLancamento extends Component{

    constructor(){
        super();
        this.state = {
            nome: "",
            sinopse: "",
            idCategoria:"",
            duracao:"",
            imagem:"",
            dataLancamento:"",
            estreia:"",
            idPlataform:"",
            erro:""
        };
    }

    atualizaNome = (event) =>{
        this.setState({nome: event.target.value});
        console.log(this.state)
    }
    atualizaSinopse = (event) =>{
        this.setState({sinopse: event.target.value});
        console.log(this.state)
    }
    atualizaCategoria = (event) =>{
        this.setState({idCategoria: event.target.value});
        console.log(this.state)
    }
    atualizaDuracao = (event) =>{
        this.setState({duracao: event.target.value});
        console.log(this.state)
    }
    atualizaImagem = (event) =>{
        this.setState({imagem: event.target.value});
        console.log(this.state)
    }
    atualizaData = (event) =>{
        this.setState({dataLancamento: event.target.value});
        console.log(this.state)
    }
    atualizaEstreia = (event) =>{
        this.setState({estreia: event.target.value});
        console.log(this.state)
    }
    atualizaPlataforma = (event) =>{
        this.setState({idPlataform: event.target.value});
        console.log(this.state)
    }

    
    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:5000/api/lancamentos',
        {
            method: "POST",
            body: JSON.stringify(
                { 
                nome: this.state.nome,
                sinopse: this.state.sinopse,
                idCategoria: this.state.idCategoria,
                duracao: this.state.duracao,
                imagem: this.state.imagem,
                dataLancamento: this.state.dataLancamento,
                estreia: this.state.estreia,
                idPlataform: this.state.idPlataform
                }),
                headers: {
                    'Accept':'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('usuario-opflix'),
                    "Content-Type": "application/json",
                }

        })
        
        .then(this.props.history.push('/lancamentos'))
        .catch(erro => { 
            this.setState({ erro: "Deu ruim"});
            console.log(erro);
        });
    }
    adicionaLancamento = (event) =>{
        let valores_lista = this.state.lista;
        let lancamento = 
        {nome: this.state.nome,
        sinopse: this.state.sinopse,
        idCategoria: this.state.idCategoria,
        duracao: this.state.duracao,
        imagem: this.state.imagem,
        dataLancamento: this.state.dataLancamento,
        estreia: this.state.estreia,
        idPlataform: this.state.idPlataform
        }

        valores_lista.push(lancamento);

        this.setState({lista: valores_lista})
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
                        <li>Cadastro</li>
                    </div>
                     </div>
                </ul>
            </nav>
            </header>
               <main>
                   <section id="lancamentos">
                       
                        
                            
                                <form>
                                <div className="filmes_lancamento" >
                                    <div className="filmes_nome" >
                                    <input
                                        placeholder="Nome"
                                        value={this.state.nome}
                                        onInput={this.atualizaNome}
                                        type="text"
                                        name="username"
                                        
                                        />
                                    </div>
                                    <div className="filmes_info">
                                    <div className="filmes_img" >
                                    <input
                                        placeholder="Imagem"
                                        value={this.state.imagem}
                                        onInput={this.atualizaImagem}
                                        type="text"
                                        name="username"
                                        
                                        />
                                    </div>
                                    <div className="filmes_column" >
                                    <div className="info2_row" >

                                       <div className="genero" >
                                       <input
                                        placeholder="Id Categoria"
                                        value={this.state.idCategoria}
                                        onInput={this.atualizaCategoria}
                                        type="text"
                                        name="username"
                                        
                                        />
                                       </div>
                                       <div className="column2" >

                                        <div className="lancamento" >  
                                        <input
                                        placeholder="Data"
                                        value={this.state.dataLancamento}
                                        onInput={this.atualizaData}
                                        type="date"
                                        name="username"
                                        
                                        />
                                        </div>
                                        
                                        <div className="duracao" >
                                        <input
                                        placeholder="Duração"
                                        value={this.state.duracao}
                                        onInput={this.atualizaDuracao}
                                        type="text"
                                        name="username"
                                        
                                        />
                                        </div>
                                        <div className="plataforma">
                                        <input
                                        placeholder="Id Plataforma"
                                        value={this.state.idPlataform}
                                        onInput={this.atualizaPlataforma}
                                        type="text"
                                        name="username"
                                        
                                        />
                                        </div>
                                        <div className="estreia" >
                                        <input
                                        placeholder="Ano"
                                        value={this.state.estreia}
                                        onInput={this.atualizaEstreia}
                                        type="text"
                                        name="username"
                                        
                                        />
                                        </div>

                                       </div>
                                        </div>

                                        <div className="sinopse" >
                                        <textarea
                                        placeholder="Sinopse"
                                        value={this.state.sinopse}
                                        onInput={this.atualizaSinopse}
                                        type="text"
                                        name="username"
                                        
                                        />
                                        </div>
                                        <div className="item">
                                        <button className="button" id="btn__login"
                                         onClick={this.adicionaItem}>
                                        Cadastrar
                                        </button>
                                         </div>
                                         <p 
                                            className="text__login"
                                            style={{color: "red", textAlign: "center"}}
                                        >
                                            {this.state.erro}
                                        </p>
                                </div>
                                    </div>
                                </div>
                                </form>
                            
                        
                   </section>
               </main>
           </div>
        );
    }
}

// export default Eventos;