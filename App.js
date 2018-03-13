import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/todos';
import TodosForm from './components/todos-form';
import TodosList from './components/todos-list';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Todos />
        <TodosForm />
        <TodosList />
      </div>
    );
  }
}

export default App;
