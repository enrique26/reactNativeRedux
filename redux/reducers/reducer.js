import {combineReducers} from 'redux';
///acciones
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';

// initial state

const initialState = {
  visibilityFilter : VisibilityFilters.SHOW_ALL,
  todos:[]
}

// crear reducers
let index=0;
function todos(state = [] ,action ){
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text:action.text,
          completed:false,
          index:++index
        }
      ]
    case COMPLETE_TODO:
      const newState = state.map( (todo, index)=>{
        if(action.index === todo.index){
          todo.completed = true
          return todo
        }
        return todo
      } )
      return newState

    case REMOVE_TODO:
      let newStateClean = state.filter( (todo) => todo.index !== action.index );
      return newStateClean;
    default:
      return todos;
  }
}

function visibilityFilter( state = VisibilityFilters.SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;

  }
}




////combinar combineReducers

///convecional
const todoApp = (state = initialState, action) => {

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter:visibilityFilter(state.visibilityFilter,action)
      }
    case ADD_TODO:
    case REMOVE_TODO:
    case COMPLETE_TODO:
    return {
      ...state,
      todos:todos(state.todos,action)

     }
    default:
      return state;

  }
}
///usando combine combineReducers
// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// });

export default todoApp;
