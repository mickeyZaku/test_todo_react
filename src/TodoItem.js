/**
 * Created by 40681 on 2017/5/24.
 */
import React from 'react';
export default class TodoItem extends React.Component{
    render(){
        return(
            <li className="list-group-item"  style={{overflow:"hidden",paddingRight:40}}>
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-md-10">
                        {this.props.todo.title}
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-danger">&times;</button>
                    </div>
                </div>
            </li>
        )
    }
}