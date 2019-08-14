import {createStore,applyMiddleware} from 'redux';

///persist storage
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';
import {VisibilityFilters,addTodo} from '../actions/actions';
///importamos el reducer
import todoApp from '../reducers/reducer';
//miportando un middleware para log
import loggerMiddleware from 'redux-logger';

const DEFAULT_STATE = {
  visibilityFilter : VisibilityFilters.SHOW_ALL,
  todos:[{text:"agregar otra tarea",completed:false}]
}

// // const persistedReducer = persistReducer(persistConfig, rootReducer)
// const store = createStore(todoApp,DEFAULT_STATE,applyMiddleware(loggerMiddleware));
//
// export default store;

const persistConfig = {
  key: 'root',
  storage:AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, todoApp)

let store = createStore(persistedReducer,DEFAULT_STATE,applyMiddleware(loggerMiddleware))

// let persistor = persistStore(store)
const persistor = persistStore(store
  // , () => {
  // // if you want to get restoredState
  // console.log("restoredState", store.getState());
// }
);


export { store, persistor }
