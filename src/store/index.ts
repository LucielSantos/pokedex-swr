import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { rootInitialState } from './modules/rootReducer';

export type IApplicationState = ReturnType<typeof rootReducer>;

let store: Store | undefined;

export type AppDispatch = typeof store.dispatch;

function initStore(preloadedState = rootInitialState) {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware()));
}

export const initializeStore = (preloadedState: IApplicationState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: IApplicationState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
