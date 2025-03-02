import http, { HttpRequestConfig } from "@core/http";
import { apiBaseUrl } from "@core/url";
import { UserNs } from "@store/types";

class UserApi {
  private apiUrl = `${apiBaseUrl}/users`;

  getUsers(config?: HttpRequestConfig) {
    return http.get<UserNs.Response[]>(this.apiUrl, config).toPromiseArrayApi();
  }

  getUser(id: string, config?: HttpRequestConfig) {
    return http.get<any>(`${this.apiUrl}/${id}`, config).toPromiseArrayApi();
  }

  borrowBook(
    userId: string,
    bookId: string,
    config?: HttpRequestConfig
  ) {
    return http
      .post<any>(`${this.apiUrl}/${userId}/borrow/${bookId}`, {}, config)
      .toPromiseArrayApi();
  }

  returnBook(
    userId: string,
    bookId: string,
    body: any,
    config?: HttpRequestConfig
  ) {
    return http
      .post<any>(`${this.apiUrl}/${userId}/return/${bookId}`, body, config)
      .toPromiseArrayApi();
  }
}

export default new UserApi();
