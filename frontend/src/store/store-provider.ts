import { Stores, StoreType, StoreKey } from './store';

class StoreProviderService {
  stores: StoreType;

  constructor() {
    this.stores = Stores;
  }

  getStore<T extends StoreKey>(name: T): StoreType[T] {
    return this.stores[name];
  }
}

export const StoreProvider = new StoreProviderService();
