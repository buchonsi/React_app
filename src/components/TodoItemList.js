import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const {todos, myToggle, myRemove } = this.props;
        const todo_list = todos.map(({id,text,checked})=>
                                    (<TodoItem id={id} 
                                                text={text} 
                                                checked={checked} 
                                                key={id}
                                                myRemove={myRemove} 
                                                myToggle={myToggle}
                                                />));
        return (
            <div>
                {todo_list}
            </div>
        );
    }
}

export default TodoItemList;