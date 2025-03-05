export interface IStatus {
  code: number;
  message?: string;
  details?: string[];
}

export interface IResponseData {
  success: boolean;
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export interface IResponse<T = any, E = any> {
  recipes: { meals: T[] };
  status: IStatus;
  errors?: E[];
}
