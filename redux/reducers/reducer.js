import {combineReducers} from 'redux';
///acciones
import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';

// initial state

const initialState = {
  visibilityFilter = VisibilityFilters.SHOW_ALL,
  todos:[]

}

// crear reducers

function todos(state = [] ,action ){
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text:action.text,completed:false
        }
      ]
    case COMPLETE_TODO:
    return [
      ...state,
      {
        todos:state.map( (todo,index)=>{
          if(index === action.index ){
            //si el indice coincide esta accion se revea
            return { todo, completed:true}
          }
          /// caso contrario no modifica el objeto
          return todo;
        } );
      }
    ]
    case REMOVE_TODO:
      const newState = state.filter( (todo) => todo.index !== action.index );
      return newState;
    default:
      return todos;
  }
}

function visibilityFilter( state = SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;

  }
}




////combinar combineReducers

///comvecional
// function todoApp(state = initialState, action){
//
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return { ...state,visibilityFilter:visibilityFilter(state.visibilityFilter,action)}
//     case ADD_TODO:
//     case REMOVE_TODO:
//     case COMPLETE_TODO:
//     return {
//       ...state,
//       {
//         todos:todos(state.todos,action)
//       }
//      }
//     default:
//       return state
//
//   }
//
//   return state
// }
///usando combine combineReducers
const todoApp = combineReducers({
  visibilityFilter:visibilityFilter,
  todos:todos
});

export default todoApp;
