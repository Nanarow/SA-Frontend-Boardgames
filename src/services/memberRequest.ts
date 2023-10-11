import { ImageToBase64 } from "../helper/utility";
import {
  LoginPayload,
  MemberBill,
  MemberType,
  MemberWithMemberType,
  User,
} from "../interfaces";
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

async function Login(formData: FormData) {
  const data: LoginPayload = {
    UserName: `${formData.get("username")}`,
    Password: `${formData.get("password")}`,
  };
  return (await http.Post(
    "/users/login",
    JSON.stringify(data)
  )) as MemberWithMemberType;
}

async function Register(formData: FormData) {
  const data: User = {
    FirstName: `${formData.get("firstName")}`,
    LastName: `${formData.get("lastName")}`,
    UserName: `${formData.get("userName")}`,
    Email: `${formData.get("email")}`,
    Password: `${formData.get("password")}`,
    Tel: `${formData.get("tel")}`,
  };
  return (await http.Post(
    "/users/register",
    JSON.stringify(data)
  )) as MemberWithMemberType;
}

export { CreateMemberBill, GetAllMemberType, GetMember, Login, Register };
