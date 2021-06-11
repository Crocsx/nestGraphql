export interface WithErrorMessage<T> {
  error: {
    code: string;
    message: string;
  };
  data: T;
}
