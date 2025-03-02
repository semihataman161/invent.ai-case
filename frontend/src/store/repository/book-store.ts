import { makeAutoObservable, runInAction } from "mobx";
import { HttpRequestConfig } from "@core/http";
import { BookApi } from "@api";
import { BookNs } from "@store/types";

class BookStore {
  data: BookNs.BaseResponse[] = [];
  selected: Partial<BookNs.ExtendedResponse> = {};

  constructor() {
    makeAutoObservable(this);
  }

  async getAll(config?: HttpRequestConfig) {
    const [err, data] = await BookApi.getBooks(config);

    if (!err) {
      runInAction(() => {
        this.data = data;
      });
    }

    return { data };
  }

  async getOne(book_id: string) {
    const [err, data] = await BookApi.getBook(book_id);

    if (!err) {
      runInAction(() => {
        this.selected = data;
      });
    }

    return data;
  }
}

export default new BookStore();
