import {createStore} from 'redux';

///persist storage
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

///importamos el reducer
import todoApp as reducer from '../reducers/reducer';


// const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(reducer);
