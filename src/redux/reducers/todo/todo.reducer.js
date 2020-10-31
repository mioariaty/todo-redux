import {
  GET_TODOLIST_FAILURE,
  GET_TODOLIST_REQUEST,
  GET_TODOLIST_SUCCESS,
  ADD_TODOLIST_FAILURE,
  ADD_TODOLIST_SUCCESS,
  ADD_TODOLIST_REQUEST,
  REMOVE_TODOLIST_FAILURE,
  REMOVE_TODOLIST_SUCCESS,
  REMOVE_TODOLIST_REQUEST,
  UPDATE_TODOLIST_FAILURE,
  UPDATE_TODOLIST_SUCCESS,
  UPDATE_TODOLIST_REQUEST
} from "../../../contants/todo.constant";

const initialState = {
  isLoading: false,
  data: [],
  message: ""
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_TODOLIST_SUCCESS:
      return {
        isLoading: false,
        data: action.payload.data
      }
    case GET_TODOLIST_FAILURE:
      return {
        isLoading: false,
        message: action.payload.message
      }
    case ADD_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ADD_TODOLIST_SUCCESS:
      return {
        isLoading: false,
        ...state,
        data: [...state.data, action.payload.data]
      }
    case ADD_TODOLIST_FAILURE:
      return {
        isLoading: false,
        message: action.payload.message
      }
    case REMOVE_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case REMOVE_TODOLIST_SUCCESS:
      const deleteTodoState = state.data.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        data: deleteTodoState,
        isLoading: false
      }
    case REMOVE_TODOLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message
      }
    case UPDATE_TODOLIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_TODOLIST_SUCCESS:
      const updateTodoState = state.data.map(item => {
        if (item.id === action.payload.data.id) {
          return {...item, ...action.payload.data}
        }
        return item;
      })
      return {
        ...state,
        isLoading: false,
        data: updateTodoState
      }
    case UPDATE_TODOLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message
      }
    default:
      return state
  }
}

export default todoReducer
