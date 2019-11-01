import React from 'react';
import '../css/style.css'
import '../css/all.css';

class List extends React.Component{

    constructor(){
        super();
        this.state = {
            lista: "To Do",
            task: "",
        };
    }

    render(){
        const tasks = ["task 1", "tasks 2"];
        return(
            <li>
                <h2>{this.state.lista}</h2>
                <ul id="to-do" class="itens">
                    {tasks.map(task => (
                    <li>{ task }</li>
                    ) )}
                </ul>
            </li>
        );
    }
}
export default List;