import { ImageToBase64 } from "../helper/utility";
import { Boardgame, GameBill, MemberWithMemberType } from "../interfaces";
import { API_URL, HTTPRequest } from "./httpRequest";

export class BoardgameRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames");
  }
  public async GetBoardgames(query: string) {
    return (await super.GetByQuery(query)) as Boardgame[];
  }

  public async FindBoardgame(id: number) {
    return (await super.GetById(id)) as Boardgame;
  }

  public async CreateBoardgame(data: Boardgame) {
    return (await super.Post(JSON.stringify(data))) as Boardgame;
  }
  public async UpdateBoardgame(data: Boardgame) {
    return (await super.Patch(JSON.stringify(data))) as Boardgame;
  }

  public async DeleteBoardgame(id: number) {
    return (await super.DeleteById(id)) as string;
  }
}

export class GameBillRequest extends HTTPRequest {
  constructor() {
    super(API_URL, "boardgames/bills");
  }
  public async CreateGameBill(body: GameBill) {
    return (await super.Post(JSON.stringify(body))) as GameBill;
  }

  public async UpdateGameBill(body: GameBill) {
    return (await super.Patch(JSON.stringify(body))) as GameBill;
  }

  public async getGameBillById(id: number) {
    return (await super.GetById(id)) as GameBill;
  }

  public async GetGameBills(query: string) {
    return (await super.GetByQuery(query)) as GameBill[];
  }
}

export async function CreateBoardGame(formData: FormData) {
  const boardgameRequest = new BoardgameRequest();
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
    return await boardgameRequest.CreateBoardgame(data);
  }
}

export async function UpdateBoardgame(
  formData: FormData,
  boardgame: Boardgame
) {
  const boardgameRequest = new BoardgameRequest();
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
    return await boardgameRequest.UpdateBoardgame(data);
  } else {
    console.log("don't have");
  }
}
