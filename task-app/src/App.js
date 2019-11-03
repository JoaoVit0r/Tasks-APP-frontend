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
    this.load =this.load.bind(this);
  }
  
  componentWillMount(){
    localStorage.getItem("listTodo") && this.setState({
      tasks: JSON.parse(localStorage.getItem("listTodo")),
      hasTasks: localStorage.getItem("listTodo").length
    })
    localStorage.getItem("listDoing") && this.setState({
      tDoing: JSON.parse(localStorage.getItem("listDoing")),
      hasDoing: localStorage.getItem("listDoing").length
    })
    localStorage.getItem("listDone") && this.setState({
      tDone: JSON.parse(localStorage.getItem("listDone")),
      hasDone: localStorage.getItem("listDone").length
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

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem("listTodo", JSON.stringify(nextState.tasks));
    localStorage.setItem("listDoing", JSON.stringify(nextState.tDoing));
    localStorage.setItem("listDone", JSON.stringify(nextState.tDone));
    localStorage.setItem("numTasks", JSON.stringify(nextState.hasTasks));
    localStorage.setItem("numDoing", JSON.stringify(nextState.hasDoing));
    localStorage.setItem("numDone", JSON.stringify(nextState.hasDone));

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
                              onClick={() => {return(
                                this.moveDoing(index),
                               this.load)}}></button>
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
                              onClick={() => {return(this.moveDone(index),
                                this.load)}}></button>
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
                              onClick={() =>{return(this.complete(index),
                                this.load)}}></button>
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
    this.setState({
      tDone: this.state.tDone.filter((element)=>(
        !(element===this.state.tDone[index]))),
      //hasDone: this.state.hasDone -1,
    });
    this.setState({
      hasDone: this.state.tDone.length,
    })
  }

  moveDone(index){
    this.setState({
      tDoing: this.state.tDoing.filter((element)=>(
                      !(element===this.state.tDoing[index])
              )),
      //hasDoing: this.state.tDoing.length,
      tDone: [].concat(this.state.tDone, this.state.tDoing[index] ),
      //hasDone: this.state.hasDone +1,
    });
    this.setState({
      hasDoing: this.state.tDoing.length,
      hasDone: this.state.tDone.length,
    })
  }

  moveDoing(index){
    this.setState({ 
      tasks: this.state.tasks.filter((element)=>(
                      !(element===this.state.tasks[index])
              )),
              
      //hasTasks: this.state.hasTasks -1,
      tDoing : [].concat(this.state.tDoing, this.state.tasks[index]),
      //hasDoing:,
    });
    this.setState({
      hasTasks: this.state.tasks.length,
      hasDoing: this.state.tDoing.length
    })
  }

  addTask(){
    if(this.state.task!==""){
      this.setState({ 
        task : "",
        tasks : [].concat(this.state.tasks, this.state.task ),
        //hasTasks: this.state.hasTasks +1,
      });
      this.setState({
        hasTasks: this.state.tasks.length
      })
    }
  }

  updateInput(event){
    this.setState({task: event.target.value})
  }

  load(){
    this.setState({
      hasTasks: this.state.tasks.length,
      hasDoing: this.state.tDoing.length,
      hasDone: this.state.tDone.length,
    })
  }
}

export default App;
