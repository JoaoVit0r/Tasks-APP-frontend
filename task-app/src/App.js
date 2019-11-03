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
      hasTasks: 0,
      hasDoing: 0,
      hasDone: 0,
    };

    this.complete = this.complete.bind(this);
    this.moveDone = this.moveDone.bind(this);
    this.moveDoing = this.moveDoing.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  
  componentDidMount(){
    localStorage.getItem("listTodo") && this.setState({
      tasks: JSON.parse(localStorage.getItem("listTodo")),
    })
    localStorage.getItem("listDoing") && this.setState({
      tDoing: JSON.parse(localStorage.getItem("listDoing")),
    })
    localStorage.getItem("listDone") && this.setState({
      tDone: JSON.parse(localStorage.getItem("listDone")),
    })
    localStorage.getItem("numTasks") && this.setState({
      hasTasks: JSON.parse(localStorage.getItem("numTasks"))
    })
    localStorage.getItem("numDoing") && this.setState({
      hasDoing: JSON.parse(localStorage.getItem("numDoing"))
    })
    localStorage.getItem("numDone") && this.setState({
      hasDone: JSON.parse(localStorage.getItem("numDone"))
    })
  }

  save(tasks,tDoing,tDone,hasTasks,hasDoing,hasDone){
    localStorage.setItem("listTodo", JSON.stringify(tasks));
    localStorage.setItem("listDoing", JSON.stringify(tDoing));
    localStorage.setItem("listDone", JSON.stringify(tDone));
    localStorage.setItem("numTasks", JSON.stringify(hasTasks));
    localStorage.setItem("numDoing", JSON.stringify(hasDoing));
    localStorage.setItem("numDone", JSON.stringify(hasDone));
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
            <li className={"has" + this.state.hasTasks}>
                <h2>to do</h2>
                <ul id="to-do" className="itens">
                    {this.state.tasks.map((task, index) => {
                      return (
                        <li key={index}>
                            <p>{task}</p>
                            <button className="fas fa-chevron-circle-right" 
                              onClick={() =>this.moveDoing(index)}></button>
                        </li>)
                      })}
                </ul>
            </li>
            <li className={"has" + this.state.hasDoing}>
                <h2>doing</h2>
                <ul id="doing" className="itens">
                    {this.state.tDoing.map((task, index) => {
                      return (<li key={index}>
                        <p>{task}</p>
                        <button className="fas fa-chevron-circle-right" 
                              onClick={() => this.moveDone(index)}></button>
                      </li>);
                    })}
                </ul>
            </li>
            <li className={"has" + this.state.hasDone}>
                <h2>done</h2>
                <ul id="done" className="itens">
                    {this.state.tDone.map((task, index) => {
                      return (
                        <li key={index}>
                            <p>{task}</p>
                            <button className="fas fa-times-circle" 
                              onClick={() =>this.complete(index)}></button>
                        </li>)
                    })}
                </ul>
            </li>
          </ul>
        </section>
      </div>
    );
  }

  complete(index){
    const {tasks,tDoing,tDone,hasTasks,hasDoing} = this.state;
    const newDone = tDone.filter((element)=>(!(element===tDone[index])))
    this.setState({
      tDone: newDone,
      hasDone: newDone.length,
    });
    this.save(tasks,tDoing,newDone,hasTasks,hasDoing,newDone.length);
  }

  moveDone(index){
    const {tasks,tDoing,tDone,hasTasks} = this.state;
    const newDoing = tDoing.filter((element)=>(!(element===tDoing[index])));
    const newDone = [].concat(tDone, tDoing[index]);
    this.setState({
      tDoing: newDoing,
      hasDoing: newDoing.length,
      tDone: newDone,
      hasDone: newDone.length,
    });
    this.save(tasks,newDoing,newDone,hasTasks,newDoing.length,newDone.length);
  }

  moveDoing(index){
    const {tasks,tDoing,tDone,hasDone} = this.state;
    const newTasks = tasks.filter((element)=>(!(element===tasks[index])));
    const newDoing = [].concat(tDoing, tasks[index]);
    this.setState({ 
      tasks: newTasks,
      hasTasks: newTasks.length,
      tDoing : newDoing,
      hasDoing: newDoing.length,
    });
    this.save(newTasks,newDoing,tDone,newTasks.length,newDoing.length,hasDone);
  }

  addTask(){
    const {task,tasks,tDoing,tDone,hasDoing,hasDone} = this.state;

    const newTasks = [].concat(tasks, task);
    if(task!==""){
      this.setState({
        tasks : newTasks,
        task : "",
        hasTasks: newTasks.length,
      });
      this.save(newTasks,tDoing,tDone,newTasks.length,hasDoing,hasDone);
    }
  }

  updateInput(event){
    this.setState({task: event.target.value})
  }
}

export default App;
