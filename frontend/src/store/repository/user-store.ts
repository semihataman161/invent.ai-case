import { makeAutoObservable, runInAction } from "mobx";
import { HttpRequestConfig } from "@core/http";
import { UserApi } from "@api";
import { UserNs } from "@store/types";

class UserStore {
  data: UserNs.BaseResponse[] = [];
  selected: Partial<UserNs.ExtendedResponse> = {};

  loaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getAll(config?: HttpRequestConfig) {
    const [err, data] = await UserApi.getUsers(config);

    if (!err) {
      runInAction(() => {
        this.data = data;
        this.loaded = true;
      });
    }

    return { data };
  }

  async getOne(user_id: string) {
    const [err, data] = await UserApi.getUser(user_id);

    if (!err) {
      runInAction(() => {
        this.selected = data;
      });
    }

    return data;
  }

  async borrow(userId: string, bookId: string) {
    const [err, data] = await UserApi.borrowBook(userId, bookId);
    return data;
  }

  async return(userId: string, bookId: string, body: UserNs.Request) {
    const [err, data] = await UserApi.returnBook(userId, bookId, body);
    return data;
  }
}

export default new UserStore();
