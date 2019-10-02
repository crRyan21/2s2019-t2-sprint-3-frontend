import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


import Axios from 'axios';

class Endereco extends Component{

    constructor(){
          super();
          this.state = {
                cep: "",
                logradouro: "",
               // complemento: "",
                bairro: "",
               // localidade: "",
               // uf: "",
               // unidade: "",
               // ibge: "",
               // gia: ""
              
          };
    }

    atualizaEstadoCep =(event) =>{
        this.setState({cep: event.target.value});
    }
    atualizaEstadoCidade =(event) =>{
      this.setState({logradouro: event.target.value});
    }
    atualizaEstadoBairro =(event) =>{
      this.setState({bairro: event.target.value});
    }

    efetuarBusca = (event) =>{
        event.preventDefault();
        let cep = this.state.cep;
        Axios.get('https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback',{
            cep: this.state.cep,
            logradouro: this.state.logradouro,
            bairro: this.state.bairro,

        })
            .then(response =>{
              if (response.status === 200) {
                console.log(response.data)
              }else{
                console.log('deu erro ')
              }
            })
            .catch(erro => { 
              this.setState({ erro: "Cep inválido"});
              console.log(erro);
          });
    }

    render() {
      return(
        <div>
          <form  id="form" onSubmit={this.state} >
          <div class="form-group row">
              <label for="input-cep" class="col-sm-2 col-form-label">Cep:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="input-cep" placeholder="Ex: 08501-000"  
                onInput={this.atualizaEstadoCep}/>
              </div>
            </div>
            <div class="form-group row">
                <label for="input-rua" class="col-sm-2 col-form-label">Rua:</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="input-rua"  size="60" placeholder="Ex: Rua Santos Dumont 300" />
                </div>
              </div>
              <div class="form-group row">
                    <label for="input-bairro" class="col-sm-2 col-form-label">Bairro:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="input-bairro"  size="40" placeholder="Ex: Sé" 
                      onInput={this.atualizaEstadoBairro}/>
                    </div>
                  </div>
                  <div class="form-group row">
                      <label for="input-cidade" class="col-sm-2 col-form-label">Cidade:</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" id="input-cidade"  size="40" placeholder="Ex: São Paulo" 
                        onInput={this.atualizaEstadoCidade}/>
                      </div>
                    </div>
                    <div class="form-group row">
                        <label for="input-uf" class="col-sm-2 col-form-label">UF:</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="input-uf"  size="2" placeholder="Ex: Sp" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="input-ibge" class="col-sm-2 col-form-label">IBGE:</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="input-ibge"  size="8" placeholder="IBGE" />
                        </div>
                    </div>
                    <button className="btn btn__login" id="btn__login"
                   // style={{position:"relative",justifyContent: "center", left:}}
                    >
                        Enviar
                    </button>
            </form>
        </div>
      );
    }
    
  }
  export default Endereco;
  
