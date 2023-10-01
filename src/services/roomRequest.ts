import { Room } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class RoomRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "rooms");
  }
  public async GetAllRoom() {
    return (await super.Get()) as Room[];
  }
  public async GetRoom(id: number) {
    return (await super.Find(id)) as Room;
  }
}

export class RoomBill extends HTTPRequest {
  constructor() {
    super(API_URL, "rooms/bills");
  }
  public async CreateRoomBill(data: RoomBill) {
    return (await super.Post(JSON.stringify(data))) as RoomBill;
  }
}
