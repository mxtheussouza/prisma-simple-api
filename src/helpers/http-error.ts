export class HttpError extends Error {
  public readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status ?? 500;
  }
}
