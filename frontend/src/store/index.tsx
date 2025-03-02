import { createContext, useContext } from 'react';
import { Stores, StoreType } from './store';
import { StoreProvider } from './store-provider';
import { StoreWrapProps } from './index.type';

const StoreContext = createContext<StoreType>(null);

const StoreWrap = ({ children, store }: StoreWrapProps) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { Stores, StoreProvider, StoreWrap, useStore };
