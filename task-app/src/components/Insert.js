import React from 'react';

class Insert extends React.Component{
    render(){
        return(
            <div className="add">
                <input type="text" placeholder="Adicione um novo todo" class="description"></input>
                 <button class="fas fa-plus-square" id="buttonAdd"></button>
            </div>
        );
    }
}
export default Insert;
