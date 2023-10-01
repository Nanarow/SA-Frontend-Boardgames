import { Room } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class RoomRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "rooms");
  }
  public async GetAllRoom(query: string) {
    return (await super.Query(query)) as Room[];
  }
  public async GetRoom(id: number) {
    return (await super.Find(id)) as Room;
  }
}
