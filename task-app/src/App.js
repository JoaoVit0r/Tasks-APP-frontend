import React from 'react';
import './css/all.css';
import './css/style.css';
import Insert from './components/Insert';
import List from './components/List'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Task App</h1>
          <Insert />
        </header>
        <section class="topics">
          <ul>
            <List/>
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
