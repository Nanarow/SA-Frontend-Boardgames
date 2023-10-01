import { Member } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class MemberRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "members");
  }
  public async GetMember(id: number) {
    return (await super.Find(id)) as Member;
  }
}