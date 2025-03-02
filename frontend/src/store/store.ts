import BookStore from "./repository/book-store";
import UserStore from "./repository/user-store";

export const Stores = {
  stoBook: BookStore,
  stoUser: UserStore,
};

export type StoreType = typeof Stores;
export type StoreKey = keyof typeof Stores;
