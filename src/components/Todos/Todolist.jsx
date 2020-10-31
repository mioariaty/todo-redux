import React from 'react';
import {connect} from "react-redux";
import {
  addTodoList,
  fetchTodoList,
  deleteTodo,
  updateTodo
} from "../../redux/thunks/Todo/todo.thunk";
import TodoItem from "./Todo/TodoItem";
import classes from './Todolist.module.scss';

class Todolist extends React.Component {
  state = {
    todo: "",
    isUpdate: false,
    id: ""
  }

  componentDidMount() {
    const {fetchTodoList} = this.props;
    fetchTodoList()
  }

  handleOnChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {todo, isUpdate, id} = this.state;
    const {addTodoList, updateTodo} = this.props;
    if (isUpdate) {
      updateTodo(id, {
        text: todo,
        updatedAt: new Date()
      })
      this.setState({
        isUpdate: false,
        todo: "",
        id: "",
        ...this.state.todo
      })
    } else {
      addTodoList({
        text: todo,
        createdAt: new Date()
      })
      this.setState({
        ...this.state.todo,
        todo: ""
      })
    }
  }

  handleDeleteTodo = (id) => {
    this.props.deleteTodo(id)
  }

  handleUpdateTodo = (id) => {
    const {todolist} = this.props;
    const currentTodo = todolist.data.find(item => item.id === id);
    this.setState({
      isUpdate: true,
      todo: currentTodo.text,
      id: id
    })
  }

  renderTodolist = (todos) => {
    let result = null;
    const {todolist} = this.props
    if (todolist.isLoading) {
      return <h3>Loading...</h3>
    }
    if (!!todolist.message) {
      return <div>{todolist.message}</div>
    }
    if (todos.length > 0) {
      result = todos.map(todo => {
        return <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={this.handleDeleteTodo}
          onUpdate={this.handleUpdateTodo}/>
      })
    }
    return result

  }

  render() {
    const {todolist} = this.props;
    const {todo, isUpdate} = this.state
    return <div className={classes.todoWrapper}>
      <h3>Todolist</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={todo} onChange={this.handleOnChange}/>
        <button>{isUpdate ? 'Update' : 'Add'}</button>
      </form>
      <ul className={classes.todoList}>
        {this.renderTodolist(todolist.data)}
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist
  }
}
const mapDispatchToProps = {
  fetchTodoList,
  addTodoList,
  deleteTodo,
  updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
