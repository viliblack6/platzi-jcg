import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import Badge from './components/Badge';
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';
import App from './components/App';

// const name = "Javier CG";
// const element = (<div>
//     <h1>Hola, soy {name}</h1>
//     <p>Soy ing. fullstack</p>
// </div>);

const container = document.getElementById('app');

//ReactDOM.render(__que__, __donde__);
// ReactDOM.render(<Badge 
//     firstName="Javier" 
//     lastName="Cureño Guzmán"
//     avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//     jobTitle=".Net Developer"
//     twitter="JCG"
//     />, container);

//ReactDOM.render(<Badges />, container);
ReactDOM.render(<App />, container);