export namespace BookNs {
  export type BaseResponse = {
    id: number;
    name: string;
  };

  export type ExtendedResponse = {} & BaseResponse;
}
