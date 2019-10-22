import React,{Component} from 'react';



//axios
import Axios from 'axios';
import logo from '../../assets/img/logoOpflix2.png';


class Cadastro extends Component{

    constructor(){
        super();
        this.state = {
            nome:"",
            email: "",
            senha: "",
            telefone:"",
            cep: "",
            numero: "",
            permissao:"",
            erro: ""
        }
    }

    // componentDidMount(){
    //     this.listaAtualizada();
    //  }

    atualizaNome = (event) =>{
        this.setState({nome: event.target.value});
        console.log(this.state)
    }
    atualizaEmail = (event) =>{
        this.setState({email: event.target.value});
        console.log(this.state)
    }

    atualizaSenha = (event) =>{
        this.setState({senha: event.target.value});
        console.log(this.state)
    }
    atualizaTelefone = (event) =>{
        this.setState({telefone: event.target.value});
        console.log(this.state)
    }
    atualizaCep = (event) =>{
        this.setState({cep: event.target.value});
        console.log(this.state)
    }
    atualizaNumero = (event) =>{
        this.setState({numero: event.target.value});
        console.log(this.state)
    }
    atualizaPermissao = (event) =>{
      this.setState({permissao: event.target.value});
      console.log(this.state)
  }

    // listaAtualizada = () =>{
    //     fetch('http://localhost:5000/api/usuarios')
    //         .then(response => response.json())
    //         .then(data => this.setState({ lista: data}));
    // }
    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.email);
        fetch('http://localhost:5000/api/usuarios',{
            method: "POST",
            body: JSON.stringify(
                { 
                nome: this.state.nome,
                email: this.state.email,
                senha:this.state.senha,
                telefone: this.state.telefone,
                cep: this.state.cep,
                numero: this.state.numero,
                permissao: this.state.permissao  
                }),
            headers: {
                'Accept':'application/json',
                "Authorization": "Bearer" + localStorage.getItem('usuario-opflix'),
                "Content-Type": "application/json",
               
            }
        })
        // .then(response =>{
        //     if(response.status === 200){
        //         console.log(response.data.token);
        //         localStorage.setItem("usuario-opflix",response.data.token);
        //         this.props.history.push('/lancamentos');
        //     }else{
        //         console.log('vish deu ruim');
        //     }
        // })
        .then(this.props.history.push('/login'))
        .catch(error => console.log(error))
    }
    adicionaUsuario = (event) =>{
        let valores_lista = this.state.lista;
        let usuario = {nome: this.state.email ,senha: this.state.senha}

        valores_lista.push(usuario);

        this.setState({lista: valores_lista})
    }

            
    

    render(){
        return(
            <section className="container flex">
            <div className="img__login"><div className="img__overlay"></div></div>
            
            <div className="item__login">
              <div className="row">
                <div className="item">
                  <img src={logo} className="icone__login" />
                </div>
                <div className="item" id="item__title">
                  <p className="text__login" id="item__description">
                    Bem-vindo! Faça seu novo cadastro
                  </p>
                </div>
                <form >
                <div className="item">
                    <input
                      className="input__login"
                      placeholder="nome"
                      value={this.state.nome}
                      onInput={this.atualizaNome}
                      type="text"
                      name="username"
                      id="login__email"
                    />
                  </div>
                  <div className="item">
                    <input
                      className="input__login"
                      placeholder="email"
                      value={this.state.email}
                      onInput={this.atualizaEmail}
                      type="text"
                      name="username"
                      id="login__email"
                    />
                    <p
                        className="text__login"
                        style={{color: 'red',textAlign:'center'}}
                    >
                        {this.state.erro}
                    </p>
                  </div>
                  <div className="item">
                    <input
                      className="input__login"
                      value={this.state.senha}
                      onInput={this.atualizaSenha}
                      placeholder="senha"
                      type="password"
                      name="password"
                      id="login__email"
                    />
                  </div>
                  <div className="item">
                    <input
                      className="input__login"
                      value={this.state.telefone}
                      onInput={this.atualizaTelefone}
                      placeholder="telefone"
                      type="text"
                      name="password"
                      id="login__email"
                    />
                  </div>
                  <div className="item">
                    <input
                      className="input__login"
                      value={this.state.cep}
                      onInput={this.atualizaCep}
                      placeholder="cep"
                      type="text"
                      name="password"
                      id="login__email"
                    />
                  </div>
                  <div className="item">
                    <input
                      className="input__login"
                      value={this.state.numero}
                      onInput={this.atualizaNumero}
                      placeholder="numero"
                      type="text"
                      name="password"
                      id="login__email"
                    />
                  </div>
                  <div className="item">
                    <input
                      className="input__login"
                      value={this.state.permissao}
                      onInput={this.atualizaPermissao}
                      placeholder="PERMISSAO"
                      type="text"
                      name="password"
                      id="login__email"
                    />
                  </div>
                  <div className="item">
                    <button className="btn btn__login" id="btn__login"
                    onClick={this.adicionaItem}>
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        );
    }

}

export default Cadastro;