import {createStore} from 'redux';

///persist storage
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {VisibilityFilters,addTodo} from '../actions/actions';
///importamos el reducer
import todoApp from '../reducers/reducer';

const DEFAULT_STATE = {
  visibilityFilter : VisibilityFilters.SHOW_ALL,
  todos:[]
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(todoApp,DEFAULT_STATE);
store.dispatch(addTodo("moficar app"));
store.dispatch(addTodo("actualizar pendientes"));
console.log("reducer state =====");
console.log(store.getState());
export default store;
