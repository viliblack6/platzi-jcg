import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';

// const name = "Javier CG";
// const element = (<div>
//     <h1>Hola, soy {name}</h1>
//     <p>Soy ing. fullstack</p>
// </div>);

const container = document.getElementById('app');

//ReactDOM.render(__que__, __donde__);
ReactDOM.render(<Badge/>, container);