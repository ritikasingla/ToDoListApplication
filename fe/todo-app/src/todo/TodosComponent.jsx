import React, {Component} from 'react'

class TodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
             {id:1, task:'gym', description: 'finished'},
             {id:2, task:'yoga', description: 'incompleted'},
             {id:3, task:'breakfast', description: 'not started'}
            ]
        }
    }

    render() {
        return (
            <div>
            <h1>Todo List</h1>
            <div className="container">
                <table className="table">
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            description
                        </th>
                    </tr>
                   { this.state.todos.map(
                        todo =>
                        <tr key={todo.id}>
                        <td>
                           {todo.task} 
                        </td>
                        <td>
                            {todo.description}
                        </td>
                    </tr>

                    )
                   }
                    
                </table>
            </div>
            </div>
        )
    }
}

export default TodosComponent;