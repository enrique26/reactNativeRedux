
export const ADD_TODO="ADD_TODO"
export const REMOVE_TODO="REMOVE_TODO"
export const COMPLETE_TODO="COMPLETE_TODO"
export const SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER";


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// actions creators
export const addTodo=(text)=>({
  type:ADD_TODO,
  text
});

export const removeTodo=(text)=>({
  type:REMOVE_TODO,
  text
});

export const completeTodo=(index)=>({
    type:COMPLETE_TODO,
    index
});

export const visibilityFilter=(filter)=>({
  type:SET_VISIBILITY_FILTER,
  filter
});
