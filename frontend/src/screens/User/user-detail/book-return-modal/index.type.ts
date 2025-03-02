export namespace BookReturnModalNs {
  export type Props = { onSubmit: (bookId: number, score: string) => void };

  export type Ref = {
    open: (id: number) => void;
    close: () => void;
  };
}
