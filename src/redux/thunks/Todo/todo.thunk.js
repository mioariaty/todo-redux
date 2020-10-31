import fetchAllTodoAction from "../../actions/todo/get.action";
import todoApi from '../../../api/todo.api';
import addTodoAction from "../../actions/todo/add.action";
import deleteTodoAction from "../../actions/todo/delete.action";
import updateTodoAction from "../../actions/todo/update.action";

const _endpoint = "todos";

export const fetchTodoList = () => async dispatch => {
  dispatch(fetchAllTodoAction.request())
  try {
    const response = await todoApi.get(`/${_endpoint}`)
    dispatch(fetchAllTodoAction.success(response.data))
    return response
  } catch (e) {
    dispatch(fetchAllTodoAction.failure(e.response))
  }
}

export const addTodoList = (item) => async dispatch => {
  dispatch(addTodoAction.request())
  try {
    const response = await todoApi.post(`/${_endpoint}`, item)
    dispatch(addTodoAction.success(response.data))
  } catch (e) {
    dispatch(addTodoAction.failure(e.response))
  }
}

export const deleteTodo = id => async dispatch => {
  dispatch(deleteTodoAction.request())
  try {
    await todoApi.delete(`/${_endpoint}/${id}`)
    dispatch(deleteTodoAction.success(id))
  } catch (e) {
    dispatch(deleteTodoAction.failure(e.response))
  }
}

export const updateTodo = (id, item) => async dispatch => {
  dispatch(updateTodoAction.request())
  try {
    const response = await todoApi.put(`/${_endpoint}/${id}`, item)
    dispatch(updateTodoAction.success(response.data))
  } catch (e) {
    dispatch(updateTodoAction.failure(e.response))
  }
}
