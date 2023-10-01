import { Room } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class RoomRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "rooms");
  }
  public async GetRoom(id: number) {
    return (await super.Find(id)) as Room;
  }
}
