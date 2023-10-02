// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';
// export const store = configureStore({
//   reducer: rootReducer,
// });
import { rootReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
