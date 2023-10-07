import {
  ImageToBase64,
  addTimeToDate,
  formatDate,
  getTimeDifference,
} from "../../helper/utility";
import {
  Boardgame,
  GameBill,
  MemberBill,
  MemberType,
  MemberWithMemberType,
  RoomBill,
  RoomWithRoomType,
} from "../../interfaces";
import { GameBillRequest } from "../../services/boardgameRequest";
import { MemberBillRequest } from "../../services/memberRequest";
import { RoomBillRequest } from "../../services/roomRequest";

function CreateGameBill(
  formData: FormData,
  member: MemberWithMemberType,
  boardgame: Boardgame
) {
  const gameBill = new GameBillRequest();
  const startDate = new Date(`${formData.get("startDate")}`);
  const endDate = new Date(`${formData.get("endDate")}`);
  const { days } = getTimeDifference(startDate, endDate);
  const data: GameBill = {
    BoardgameID: boardgame.ID!,
    StartDate: startDate,
    EndDate: endDate,
    ReturnStatus: "pending",
    MemberID: member.ID,
    Status: "pending",
    Total: days * boardgame.RentalPrice,
  };
  gameBill.CreateGameBill(data);
}

async function UpdateGameBill(formData: FormData, gameBill: GameBill) {
  const gameBillRequest = new GameBillRequest();
  const fileSlip = formData.get("fileSlip");
  if (fileSlip instanceof File) {
    const base64 = await ImageToBase64(fileSlip);
    const payDate = new Date();
    const data: GameBill = {
      ...gameBill,
      ReturnStatus: "renting",
      Status: "paid",
      Slip: base64,
      PayDate: payDate,
    };
    gameBillRequest.UpdateGameBill(data);
  }
}

async function CreateMemberBill(
  formData: FormData,
  member: MemberWithMemberType,
  memberType: MemberType
) {
  const memberBill = new MemberBillRequest();
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
    await memberBill.CreateMemberBill(data);
  }
}

function CreateRoomBill(
  formData: FormData,
  member: MemberWithMemberType,
  room: RoomWithRoomType
) {
  const roomBillRequest = new RoomBillRequest();
  const startDate = new Date(
    `${formData.get("reserveDate")} ${formData.get("startTime")}`
  );
  const hours = Number(formData.get("hour"));
  const endDate = addTimeToDate(startDate, { hours: hours });
  const roomBill: RoomBill = {
    RoomID: room.ID,
    StartTime: startDate,
    EndTime: endDate,
    Hour: Number(formData.get("hour")),
    MemberID: member.ID,
    Status: "pending",
    Total: hours * room.RoomType.Price,
  };
  return roomBillRequest.CreateRoomBill(roomBill);
}

async function UpdateRoomBill(formData: FormData, roomBill: RoomBill) {
  const roomBillRequest = new RoomBillRequest();
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
    roomBillRequest.UpdateRoomBill(data);
  }
}

export {
  CreateGameBill,
  CreateRoomBill,
  CreateMemberBill,
  UpdateGameBill,
  UpdateRoomBill,
};
