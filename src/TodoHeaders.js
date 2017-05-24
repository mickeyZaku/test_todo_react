/**
 * Created by 40681 on 2017/5/24.
 */
import React from 'react';
const KEY_ENTER = 13;
export default class TodoHeaders extends React.Component{
    handleKeyDown=(event)=>{
        // event.preventDefault();
        if (event.keyCode === KEY_ENTER) {
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value='';
        }
    };

    render(){
        return(
                <input type="text" className="form-control" placeholder="please press what you want to do" autoFocus={true} onKeyUp={this.handleKeyDown} />
       )
    }
}