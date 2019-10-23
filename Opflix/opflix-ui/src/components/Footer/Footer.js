import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logoOpflix.png';

export default class Footer extends Component{
    render(){
        return(
            <div className="Rodapé" >
                <div className="Logo_txt" >
            <img src={logo} alt="" width="90px" height="30" />
                <p>Todos os direitos reservados ®™</p>
                </div>
            </div>
        );
    }
}