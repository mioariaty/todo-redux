import {
  UPDATE_TODOLIST_FAILURE,
  UPDATE_TODOLIST_REQUEST,
  UPDATE_TODOLIST_SUCCESS
} from "../../../contants/todo.constant";

const updateTodoAction = {
  request: () => ({
    type: UPDATE_TODOLIST_REQUEST
  }),
  success: (data) => ({
    type: UPDATE_TODOLIST_SUCCESS,
    payload: {
      data
    }
  }),
  failure: message => ({
    type: UPDATE_TODOLIST_FAILURE,
    payload: {
      message
    }
  })
}
export default updateTodoAction;
