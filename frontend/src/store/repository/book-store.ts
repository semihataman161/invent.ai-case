import { makeAutoObservable, runInAction } from "mobx";
import { HttpRequestConfig } from "@core/http";
import { BookApi } from "@api";
import { BookNs } from "@store/types";

class BookStore {
  data: BookNs.Response[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getBooks(config?: HttpRequestConfig) {
    const [err, data] = await BookApi.getBooks(config);

    if (!err) {
      runInAction(() => {
        this.data = data;
      });
    }

    return { data };
  }

  async getBook(book_id: string) {
    const [err, data] = await BookApi.getBook(book_id);
    return data;
  }
}

export default new BookStore();
