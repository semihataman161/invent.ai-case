export namespace BookNs {
  export type BaseResponse = {
    id: number;
    name: string;
  };

  export type ExtendedResponse = {
    author: string;
    currentBorrower: string;
    score: number | null;
    year: number;
  } & BaseResponse;
}
