import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home/App';
import Login from './pages/Login/Login';
import Lancamentos from './pages/Lancamentos/Lancamentos';
import CadastrarLancamento from './pages/CadastrarLancamento/CadastrarLancamento';

import * as serviceWorker from './serviceWorker';
import Cadastro from './pages/Cadastro/Cadastro';

import { parseJwt } from './services/auth';
import LancamentosComum from "./pages/Lancamentos/LancamentosComum";
import LancamentosAdmin from "./pages/Lancamentos/LancamentosAdmin";

//rotas

// const PermissaoComum = ({ component: Component}) => (
//     <Route 
//         render={
//             props =>
//                 parseJwt().Permissao === "COMUM" ? (
//                     <PermissaoComum {...props} />
//                 ) : (
//                     <LancamentosAdmin {...props} />
//                 )
//         }
//     />
// );

const RotaPrivada = ({component: Component}) =>(
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                <Component {...props} /> 
            ) : (
                <Redirect 
                    to={{ pathname: "/login", state: {from: props.location}}}
                />
            )
        }
        render={
            props =>
                parseJwt().Permissao === "COMUM" ? (
                    <RotaPrivada {...props} />
                ) : (
                    <LancamentosAdmin {...props} />
                )
        }
    />    
      
);
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <RotaPrivada exact path ="/cadastrarLancamento" component={CadastrarLancamento}/>
                {/* <Route path='/lancamentos' component={Lancamentos}/> */}
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/login' component={Login}/>
                <RotaPrivada path='/lancamentos' component={LancamentosComum}/>
                
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
