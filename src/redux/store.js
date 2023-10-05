// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';
// export const store = configureStore({
//   reducer: rootReducer,
// });
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { persistedContactsReducer } from './contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';

// const enhancer = devToolsEnhancer();
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
