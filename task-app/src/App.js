import React from 'react';
import './css/all.css';
import Insert from './components/Insert';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo App</h1>
          <Insert />
        </header>
        <section class="topics">
          <ul>
            <li>
              <h2>To Do</h2>
              <ul id="to-do" class="itens"></ul>
            </li>
            <li>
              <h2>Doing</h2>
              <ul id="doing" class="itens"></ul>
            </li>
            <li>
              <h2>Done</h2>
              <ul id="done" class="itens"></ul>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
