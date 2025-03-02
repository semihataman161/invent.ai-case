export namespace UserNs {
  export type Request = {
    score: number;
  };

  export type BaseResponse = {
    id: number;
    name: string;
  };

  export type PastBook = {
    name: string;
    userScore: number;
  };

  export type PresentBook = {
    name: string;
  };

  export type ExtendedResponse = {
    books: {
      past: PastBook[];
      present: PresentBook[];
    };
  } & BaseResponse;
}
