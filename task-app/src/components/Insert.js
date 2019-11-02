import React from 'react';

class Insert extends React.Component{
    constructor(){
        super();
        this.state = {
            tarefa: "",
        };
        this.updateInput = this.updateInput.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    render(){
        return(
            <div className="add">
                <input type="text" placeholder="Type your task here" className="description"
                onChange={this.updateInput} value={ this.state.tarefa }/>
                <button className="fas fa-plus-square" id="buttonAdd" onClick={this.addTask}></button>
            </div>
        );
    }

    addTask(){
        
    }

    updateInput(event){
        this.setState({tarefa: event.target.value})
    }
}
export default Insert;
