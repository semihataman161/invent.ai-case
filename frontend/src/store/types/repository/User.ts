export namespace UserNs {
  export type Request = {
    score: number;
  };

  export type BaseResponse = {
    id: number;
    name: string;
  };

  export type PastBook = {
    id: number;
    bookId: number;
    name: string;
    userScore: number;
  };

  export type PresentBook = {
    id: number;
    bookId: number;
    name: string;
  };

  export type ExtendedResponse = {
    books: {
      past: PastBook[];
      present: PresentBook[];
    };
  } & BaseResponse;
}
