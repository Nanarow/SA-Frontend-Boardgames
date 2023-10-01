import { Boardgame, GameBill } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class BoardgameRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames");
  }
  public async GetBoardgames(query: string) {
    return (await super.Query(query)) as Boardgame[];
  }

  public async FindBoardgame(id: number) {
    return (await super.Find(id)) as Boardgame;
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

export class GameBillRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames/bills");
  }
  public async getGameBillById(id: number) {
    return (await super.Find(id)) as GameBill;
  }
  public async CreateGameBill(id: number) {
    return (await super.Find(id)) as GameBill;
  }

  public async getBoardgameBill(id: number) {
    return (await super.Find(id)) as GameBill;
  }
}
