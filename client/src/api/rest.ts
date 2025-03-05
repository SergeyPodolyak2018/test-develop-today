import CONSTANTS from "../constatnts/constants";
import { TRecipe, TRecipeProps } from "../definitions/main";
import { IResponse } from "./response";

class RestAPI {
  private readonly base_uri: string;
  private readonly path: string;

  constructor() {
    this.base_uri = CONSTANTS.baseUri;
    this.path = CONSTANTS.path;
  }

  async getRecipe(id: string): Promise<IResponse<TRecipeProps>> {
    return await fetch(`${this.base_uri}${this.path}${id}`)
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
  async getRecipeByParams(param: string): Promise<IResponse<TRecipe>> {
    return await fetch(`${this.base_uri}${this.path}?${param}`)
      .then((res) => res.json())
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

const restApi = new RestAPI();
export default restApi;
