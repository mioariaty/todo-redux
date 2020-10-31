import {ADD_TODOLIST_FAILURE, ADD_TODOLIST_REQUEST,ADD_TODOLIST_SUCCESS} from "../../../contants/todo.constant";

const addTodoAction = {
  request: () => ({
    type: ADD_TODOLIST_REQUEST
  }),
  success: data => ({
    type: ADD_TODOLIST_SUCCESS,
    payload: {
      data
    }
  }),
  failure: message => ({
    type: ADD_TODOLIST_FAILURE,
    payload: {
      message
    }
  })
}
export default addTodoAction
