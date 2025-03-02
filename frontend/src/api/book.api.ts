import http, { HttpRequestConfig } from "@core/http";
import { apiBaseUrl } from "@core/url";

class BookApi {
  private apiUrl = `${apiBaseUrl}/books`;

  getBooks(config?: HttpRequestConfig) {
    return http.get<any[]>(this.apiUrl, config).toPromiseArrayApi();
  }

  getBook(id: string | number, config?: HttpRequestConfig) {
    return http.get<any>(`${this.apiUrl}/${id}`, config).toPromiseArrayApi();
  }
}

export default new BookApi();
