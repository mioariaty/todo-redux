import {REMOVE_TODOLIST_FAILURE, REMOVE_TODOLIST_REQUEST, REMOVE_TODOLIST_SUCCESS} from "../../../contants/todo.constant";

const deleteTodoAction = {
  request: () => ({
    type: REMOVE_TODOLIST_REQUEST
  }),
  success: id => ({
    type: REMOVE_TODOLIST_SUCCESS,
    payload: {
      id
    }
  }),
  failure: message => ({
    type: REMOVE_TODOLIST_FAILURE,
    payload: {
      message
    }
  })
}
export default deleteTodoAction;
