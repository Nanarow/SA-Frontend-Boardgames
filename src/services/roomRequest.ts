import { Room, RoomWithRoomType } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class RoomRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "rooms");
  }
  public async GetAllRoom() {
    return (await super.Get()) as RoomWithRoomType[];
  }
  public async GetRoom(id: number) {
    return (await super.GetById(id)) as Room;
  }
}

export class RoomBill extends HTTPRequest {
  constructor() {
    super(API_URL, "rooms/bills");
  }
  public async CreateRoomBill(data: RoomBill) {
    return (await super.Post(JSON.stringify(data))) as RoomBill;
  }
  public async UpdateRoomBill(data: RoomBill) {
    return (await super.Patch(JSON.stringify(data))) as RoomBill;
  }

  public async GetRoomBills(query: string) {
    return (await super.GetByQuery(query)) as RoomBill[];
  }
}
