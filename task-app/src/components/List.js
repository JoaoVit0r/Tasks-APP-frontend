import React from 'react';

class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        };
    }

    render(){
        return(
            <li>
                <h2>{this.props.titulo}</h2>
                <ul id="to-do" className="itens">
                    {this.props.tarefas.map((task,index) => (
                        <li key={task}>
                            <p>{task}</p>
                            <button className={this.props.namebt} onClick={() => (this.props.func(index))}></button>
                        </li>
                    ))}
                </ul>
            </li>
        )
    }
}
export default List;