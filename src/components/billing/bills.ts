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
    StartDate: formatDate(startDate),
    EndDate: formatDate(endDate),
    ReturnStatus: "pending",
    MemberID: member.ID,
    Status: "pending",
    Total: days * boardgame.RentalPrice,
    Slip: "",
    PayAt: "",
  };
  gameBill.CreateGameBill(data);
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
    const payAt = formatDate(new Date());
    const data: MemberBill = {
      MemberTypeID: memberType.ID,
      MemberID: member.ID,
      Status: "paid",
      Total: memberType.Price,
      Slip: base64,
      PayAt: payAt,
    };
    memberBill.CreateMemberBill(data);
  }
}

async function CreateRoomBill(
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
    StartTime: formatDate(startDate),
    EndTime: formatDate(endDate),
    Hour: Number(formData.get("hour")),
    MemberID: member.ID,
    Status: "pending",
    Total: hours * room.RoomType.Price,
    Slip: "",
    PayAt: "",
  };
  roomBillRequest.CreateRoomBill(roomBill);
}

export { CreateGameBill, CreateRoomBill, CreateMemberBill };
