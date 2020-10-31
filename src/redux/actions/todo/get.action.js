import {GET_TODOLIST_REQUEST, GET_TODOLIST_SUCCESS, GET_TODOLIST_FAILURE} from "../../../contants/todo.constant";

const fetchAllTodoAction = {
  request: () => ({
    type: GET_TODOLIST_REQUEST
  }),
  success: (data) => ({
    type: GET_TODOLIST_SUCCESS,
    payload: {
      data
    }
  }),
  failure: (message) => ({
    type: GET_TODOLIST_FAILURE,
    payload: {
      message
    }
  })
}
export default fetchAllTodoAction
