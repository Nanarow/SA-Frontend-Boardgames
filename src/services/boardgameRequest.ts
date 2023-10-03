import { Boardgame, GameBill } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class BoardgameRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames");
  }
  public async GetBoardgames(query: string) {
    return (await super.GetByQuery(query)) as Boardgame[];
  }

  public async FindBoardgame(id: number) {
    return (await super.GetById(id)) as Boardgame;
  }

  public async CreateBoardgame(data: Boardgame) {
    return (await super.Post(JSON.stringify(data))) as Boardgame;
  }
  public async UpdateBoardgame(data: Boardgame) {
    return (await super.Patch(JSON.stringify(data))) as Boardgame;
  }

  public async DeleteBoardgame(id: number) {
    return (await super.DeleteById(id)) as string;
  }
}

export class GameBillRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames/bills");
  }
  public async CreateGameBill(body: GameBill) {
    return (await super.Post(JSON.stringify(body))) as GameBill;
  }

  public async getGameBillById(id: number) {
    return (await super.GetById(id)) as GameBill;
  }
}
