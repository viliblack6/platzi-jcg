// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
// import App from './components/App';

// const container = document.getElementById('app');

// ReactDOM.render(<App />, container);


// const element = document.createElement('h1');
// element.innerText = 'Hello, morros!';
// const container = document.getElementById('app');
// container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, vatos locos!</h1>
const name = "Javier CG";
const sum = () => 5 +5;
//const element = React.createElement('h1', {}, `Hola soy ${name}`);
// const jsx = <h1>Hola, soy {sum()}</h1>

const jsx = (<div>
    <h1>Hola, soy {name}</h1>
    <p>Soy ing. fullstack</p>
</div>);

const element = React.createElement('div', {}, 
React.createElement('h1', {}, `Hola, soy ${name}`,
React.createElement('p', {}, `Soy ing. fullstack`)
));

const container = document.getElementById('app');

//ReactDOM.render(__que__, __donde__);
ReactDOM.render(element, container);