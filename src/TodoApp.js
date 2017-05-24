/**
 * Created by 40681 on 2017/5/24.
 */
import React from 'react';
import ToHeaders from './TodoHeaders';
import TodoItem from './TodoItem'
require('bootstrap/dist/css/bootstrap.css');

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id:Date.now(),title:'miao~',complete:false}
            ]
        }
    };
    addTodo=(todo)=>{
        todo=Object.assign(todo,{id:Date.now(),complete:false});
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todos});
    };
    render() {
        let main = (
            <ul className="list-group" style={{overflow: "auto",height:250,}}>
                {
                    this.state.todos.map((item,index)=>{
                      return(  <TodoItem todo={item} key={index}/>)
                    })
                }
            </ul>
        );
        return (
            <div className="container" style={{marginTop: 30}}>
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className=" panel panel-primary">
                            <div className="panel-heading">
                                <ToHeaders addTodo={this.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}