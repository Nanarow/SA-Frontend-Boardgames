import { Boardgame } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class BoardgameRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames");
  }
  public async GetBoardgames() {
    return (await super.Get()) as Boardgame[];
  }

  public async FindBoardgame(id: number) {
    return (await super.Get(id)) as Boardgame;
  }

  public async CreateBoardgame(data: Boardgame) {
    return (await super.Post(JSON.stringify(data))) as Boardgame;
  }
  public async UpdateBoardgame(data: Boardgame) {
    return (await super.Patch(JSON.stringify(data))) as Boardgame;
  }

  public async DeleteBoardgame(id: number) {
    return (await super.Delete(id)) as string;
  }
}
