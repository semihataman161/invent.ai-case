import { ReactNode } from 'react';
import { StoreType } from './store';

export type StoreWrapProps = {
  children: ReactNode;
  store: StoreType;
};
