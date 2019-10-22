import React,{Component} from 'react';

import './App.css';
import Axios from 'axios';
import '../../assets/style.css'

class Repositorios extends Component{
      constructor(){
        super();
        this.state ={
          lista:[

          ],
          login: '',
          email:'',
          senha:''
          
        };
      }
      capturarUsuario =(event) =>{
        this.setState({login: event.target.value})
        console.log(this.state)
      }
      efetuarRequisicao = (event) =>{
        event.preventDefault();
        
        Axios.post("http://192.168.7.85:5000/api/login", {
            email: this.state.email, 
            senha: this.state.senha
        })
            .then(response =>{
                if(response.status === 200){
                    console.log(response.data.token);
                    localStorage.setItem("usuario",response.data.token);
                    this.props.history.push('/categorias');
                }else{
                    console.log('vish deu ruim');
                }
            })
            .catch(erro => { 
                this.setState({ erro: "Usuário ou senha inválidos"});
                console.log(erro);
            });
    }
      

      render(){
        return(
          <div>
            <div id="titulo">
            <h1>Encontre seu repositório GitHub</h1>
            </div>
          <form  id="form" onSubmit={this.efetuarRequisicao}>
          <div className="form-group row">
              <label className="col-sm-2 col-form-label"/>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="input-cep" placeholder="Ex: CrRyan21"  
                onInput={this.capturarUsuario}/>
              </div>
            </div>
              <button className="btn btn__login" id="btn__login"
                  // style={{position:"relative",justifyContent: "center", left:}}
                  >
                      Procurar
              </button>
            </form>
        </div>
        )
      }
    }

export default Repositorios;
