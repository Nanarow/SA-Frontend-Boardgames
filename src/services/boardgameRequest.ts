import { ImageToBase64, getTimeDifference } from "../helper/utility";
import { Boardgame, GameBill, MemberWithMemberType } from "../interfaces";
import { HTTPRequest } from "./httpRequest";

const http = new HTTPRequest();
async function CreateBoardGame(formData: FormData) {
  const file = formData.get("SrcFile");
  if (file instanceof File) {
    const base64 = await ImageToBase64(file);
    const data: Boardgame = {
      Title: `${formData.get("Title")}`,
      NumberOfPlayers: `${formData.get("NumberOfPlayers")}`,
      MinAge: Number(`${formData.get("MinAge")}`),
      PlayTime: Number(`${formData.get("PlayTime")}`),
      Category: `${formData.get("Category")}`,
      RentalPrice: Number(`${formData.get("RentalPrice")}`),
      QuantityInStock: Number(`${formData.get("QuantityInStock")}`),
      QuantityInRental: Number(`${formData.get("QuantityInRental")}`),
      Deposit: Number(`${formData.get("Deposit")}`),
      Src: base64,
      Tutorial: `${formData.get("Tutorial")}`,
    };
    console.log(data);
    return await http.Post("/boardgames", JSON.stringify(data));
  }
}

async function UpdateBoardgame(formData: FormData, boardgame: Boardgame) {
  const file = formData.get("SrcFile");
  if (file instanceof File) {
    const base64 = await ImageToBase64(file);
    const newFile =
      base64 === "data:application/octet-stream;base64,"
        ? boardgame.Src
        : base64;
    const data: Boardgame = {
      ID: boardgame.ID!,
      Title: `${formData.get("Title")}`,
      NumberOfPlayers: `${formData.get("NumberOfPlayers")}`,
      MinAge: Number(`${formData.get("MinAge")}`),
      PlayTime: Number(`${formData.get("PlayTime")}`),
      Category: `${formData.get("Category")}`,
      RentalPrice: Number(`${formData.get("RentalPrice")}`),
      QuantityInStock: Number(`${formData.get("QuantityInStock")}`),
      QuantityInRental: Number(`${formData.get("QuantityInRental")}`),
      Deposit: Number(`${formData.get("Deposit")}`),
      Src: newFile,
      Tutorial: `${formData.get("Tutorial")}`,
    };
    console.log(data);
    return await http.Patch("/boardgames", JSON.stringify(data));
  }
}

async function CreateGameBill(
  formData: FormData,
  member: MemberWithMemberType,
  boardgame: Boardgame
) {
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
  return await http.Post("/boardgames/bills", JSON.stringify(data));
}

async function UpdateGameBill(formData: FormData, gameBill: GameBill) {
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
    return await http.Patch("/boardgames/bills", JSON.stringify(data));
  }
}

async function GetBoardgames(query: string) {
  return (await http.Get(`/boardgames?${query}`)) as Boardgame[];
}

async function GetGameBills(query: string) {
  return (await http.Get(`/boardgames/bills?${query}`)) as GameBill[];
}

async function DeleteBoardgame(boardgameID: number) {
  return await http.Delete(`/boardgames/${boardgameID}`);
}

export {
  DeleteBoardgame,
  GetBoardgames,
  CreateBoardGame,
  UpdateBoardgame,
  CreateGameBill,
  UpdateGameBill,
  GetGameBills,
};
