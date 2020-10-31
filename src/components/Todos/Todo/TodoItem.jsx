import React from 'react';
import classes from './TodoItem.module.scss'

class TodoItem extends React.Component {

  removeTodo = (id) => {
    this.props.onDelete(id)
  }

  updateTodo = id => {
    this.props.onUpdate(id)
  }

  render() {
    const {todo} = this.props;

    return (
      <li className={classes.listItem}>
        <p>{todo.text}</p>
        <div>
          <button onClick={() => this.updateTodo(todo.id)}>Edit</button>
          <button className={classes.delete} onClick={() => this.removeTodo(todo.id)}>Remove</button>
        </div>
      </li>
    )
  }
}

export default TodoItem
