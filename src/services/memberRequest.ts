import { ImageToBase64 } from "../helper/utility";
import { MemberBill, MemberType, MemberWithMemberType } from "../interfaces";
import { HTTPRequest } from "./httpRequest";

const http = new HTTPRequest();

async function CreateMemberBill(
  formData: FormData,
  member: MemberWithMemberType,
  memberType: MemberType
) {
  const fileSlip = formData.get("fileSlip");
  if (fileSlip instanceof File) {
    const base64 = await ImageToBase64(fileSlip);
    const payDate = new Date();
    const data: MemberBill = {
      MemberTypeID: memberType.ID,
      MemberID: member.ID,
      Status: "paid",
      Total: memberType.Price,
      Slip: base64,
      PayDate: payDate,
    };
    return (await http.Post(
      "/members",
      JSON.stringify(data)
    )) as MemberWithMemberType;
  }
}

async function GetAllMemberType() {
  return (await http.Get("/members/types")) as MemberType[];
}

async function GetMember(id: number) {
  return (await http.Get(`/members/${id}`)) as MemberWithMemberType;
}

export { CreateMemberBill, GetAllMemberType, GetMember };
