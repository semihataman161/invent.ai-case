import { makeAutoObservable, runInAction } from "mobx";
import { HttpRequestConfig } from "@core/http";
import { UserApi } from "@api";
import { UserNs } from "@store/types";

class UserStore {
  data: UserNs.Response[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers(config?: HttpRequestConfig) {
    const [err, data] = await UserApi.getUsers(config);

    if (!err) {
      runInAction(() => {
        this.data = data;
      });
    }

    return { data };
  }

  async getUser(user_id: string) {
    const [err, data] = await UserApi.getUser(user_id);
    return data;
  }

  async borrowBook(userId: string | number, bookId: string | number) {
    const [err, data] = await UserApi.borrowBook(userId, bookId);
    return data;
  }

  async returnBook(
    userId: string | number,
    bookId: string | number,
    body: UserNs.Request
  ) {
    const [err, data] = await UserApi.returnBook(userId, bookId, body);
    return data;
  }
}

export default new UserStore();
