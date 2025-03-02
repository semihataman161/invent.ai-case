import http, { HttpRequestConfig } from "@core/http";
import { apiBaseUrl } from "@core/url";
import { BookNs } from "@store/types";

class BookApi {
  private apiUrl = `${apiBaseUrl}/books`;

  getBooks(config?: HttpRequestConfig) {
    return http
      .get<BookNs.BaseResponse[]>(this.apiUrl, config)
      .toPromiseArrayApi();
  }

  getBook(id: string, config?: HttpRequestConfig) {
    return http
      .get<BookNs.ExtendedResponse>(`${this.apiUrl}/${id}`, config)
      .toPromiseArrayApi();
  }
}

export default new BookApi();
