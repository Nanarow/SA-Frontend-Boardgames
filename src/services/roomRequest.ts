import { addTimeToDate, ImageToBase64 } from "../helper/utility";
import {
  MemberWithMemberType,
  Room,
  RoomBill,
  RoomWithRoomType,
} from "../interfaces";
import { HTTPRequest } from "./httpRequest";

const http = new HTTPRequest();

export async function CreateRoomBill(
  formData: FormData,
  member: MemberWithMemberType,
  room: RoomWithRoomType
) {
  const startDate = new Date(
    `${formData.get("reserveDate")} ${formData.get("startTime")}`
  );
  const hours = Number(formData.get("hour"));
  const endDate = addTimeToDate(startDate, { hours: hours });
  const data: RoomBill = {
    RoomID: room.ID,
    StartTime: startDate,
    EndTime: endDate,
    Hour: Number(formData.get("hour")),
    MemberID: member.ID,
    Status: "pending",
    Total: hours * room.RoomType.Price,
  };
  return (await http.Post("/rooms/bills", JSON.stringify(data))) as RoomBill;
}

export async function UpdateRoomBill(formData: FormData, roomBill: RoomBill) {
  const fileSlip = formData.get("fileSlip");
  if (fileSlip instanceof File) {
    const base64 = await ImageToBase64(fileSlip);
    const payDate = new Date();
    const data: RoomBill = {
      ...roomBill,
      Status: "paid",
      Slip: base64,
      PayDate: payDate,
    };
    return (await http.Patch("/rooms/bills", JSON.stringify(data))) as RoomBill;
  }
}

export async function GetRoomBills(query: string) {
  return (await http.Get(`/rooms/bills?${query}`)) as RoomBill[];
}

export async function GetAllRoom(query: string) {
  return (await http.Get(`/rooms?${query}`)) as RoomWithRoomType[];
}

export async function GetRoomBillByRoomID(id: number) {
  return (await http.Get(`/rooms/bills/room/${id}`)) as RoomBill;
}
