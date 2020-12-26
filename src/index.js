import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css';

export { default as App } from "./App";
export { default as Auth } from "./Auth";
export { default as Nav } from "./Nav";
ReactDOM.render(<App />,document.getElementById('root'))