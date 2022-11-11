import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii From React</h1>
            <h2>This is my code</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))



// let React = require('react');
// let ReactDOM = require('react-dom');

// function App(){
//     return(
//       <h1>Hii From React App</h1>
//     )
// }