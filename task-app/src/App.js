import React from 'react';
import './css/all.css';
import './css/style.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: "",
      tasks: [],
      tDoing: [],
      tDone: [],
    };

    this.moveDone = this.moveDone.bind(this);
    this.moveDoing = this.moveDoing.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Task App</h1>
          <div className="add">
            <input type="text" placeholder="Type your task here" className="description"
               onChange={this.updateInput} value={ this.state.task }/>
            <button className="fas fa-plus-square" id="buttonAdd" onClick={this.addTask}></button>
          </div>
        </header>

        <section className="topics">
          <ul>
            <li>
                <h2>to do</h2>
                <ul id="to-do" className="itens">
                    {this.state.tasks.map((task, index) => (
                        <li key={task}>
                            <p>{task}</p>
                            <button className="fas fa-chevron-circle-right" 
                              onClick={() => this.moveDoing(index)}></button>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <h2>doing</h2>
                <ul className="itens">
                    {this.state.tDoing.map((task) => (
                        <li key={task}>
                            <p>{task}</p>
                            <button className="fas fa-chevron-circle-right" ></button>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <h2>done</h2>
                <ul id="done" className="itens">
                    {this.state.tDone.map((task, index) => (
                        <li key={task}>
                            <p>{task}</p>
                            <button className="fas fa-chevron-circle-right" 
                              onClick={() => this.moveDoing(index)}></button>
                        </li>
                    ))}
                </ul>
            </li>
          </ul>
        </section>
      </div>
    );
  }
  moveDone(){
    this.setState({ 
      done: [].concat(this.state.done, this.state.doing.pop() )
    });
  }

  moveDoing(index){
    console.log(index);
    console.log(this.state.tasks);
    console.log(this.state.tasks.slice(index,1) );
    this.setState({ 
      doing : this.state.doing.push(this.state.tasks.slice(index,1) )
    });
    
    console.log(this.state.tasks);
    console.log(this.state.tasks.slice(index,1) );
  }

  addTask(){
    this.setState({ 
      task : "",
      tasks : [].concat(this.state.tasks, this.state.task ),
    });
  }

  updateInput(event){
    this.setState({task: event.target.value})
  }
}

export default App;
