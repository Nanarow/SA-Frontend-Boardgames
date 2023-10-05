import { Member, MemberBill, MemberType } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class MemberRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "members");
  }
  public async GetMember(id: number) {
    return (await super.GetById(id)) as Member;
  }
}

export class MemberBillRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "members/bills");
  }
  public async CreateMemberBill(data: MemberBill) {
    return (await super.Post(JSON.stringify(data))) as MemberBill;
  }

  public async GetMemberBills(query: string) {
    return (await super.GetByQuery(query)) as MemberBill[];
  }
}

export class MemberTypeRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "members/types");
  }
  public async GetAllMemberType() {
    return (await super.Get()) as MemberType[];
  }
}
