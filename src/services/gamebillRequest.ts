import { GameBill } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class GameBillRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "gameBill");
  }
  public async getGameBill(id: number) {
    return (await super.Find(id)) as GameBill;
  }
}
