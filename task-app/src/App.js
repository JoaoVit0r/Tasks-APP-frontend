import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div class="add">
          <input type="text" placeholder="Adicione um novo todo" class="description"></input>
          <button class="fas fa-plus-square" id="buttonAdd"></button>
        </div>
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

export default App;
