import http, { HttpRequestConfig } from "@core/http";
import { apiBaseUrl } from "@core/url";

class UserApi {
  private apiUrl = `${apiBaseUrl}/users`;

  getUsers(config?: HttpRequestConfig) {
    return http.get<any[]>(this.apiUrl, config).toPromiseArrayApi();
  }

  getUser(id: string | number, config?: HttpRequestConfig) {
    return http.get<any>(`${this.apiUrl}/${id}`, config).toPromiseArrayApi();
  }

  borrowBook(
    userId: string | number,
    bookId: string | number,
    config?: HttpRequestConfig
  ) {
    return http
      .post<any>(`${this.apiUrl}/${userId}/borrow/${bookId}`, {}, config)
      .toPromiseArrayApi();
  }

  returnBook(
    userId: string | number,
    bookId: string | number,
    body: any,
    config?: HttpRequestConfig
  ) {
    return http
      .post<any>(`${this.apiUrl}/${userId}/return/${bookId}`, body, config)
      .toPromiseArrayApi();
  }
}

export default new UserApi();
