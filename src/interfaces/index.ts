interface Boardgame {
  ID?: number;
  Title: string;
  NumberOfPlayers: string;
  MinimumAge: number;
  PlayTime: number;
  Category: string;
  RentalPrice: number;
  QuantityInStock: number;
  QuantityInRental: number;
  Deposit: number;
  Source: string;
  Tutorial: string;
}

interface Bill {
  ID?: number;
  MemberID: number;
  Status: "paid" | "pending";
  Total: number;
  Slip?: string;
  PayDate?: Date;
}

interface GameBill extends Bill {
  BoardgameID: number;
  StartDate: Date;
  EndDate: Date;
  ReturnStatus: "renting" | "returned" | "pending";
}
interface RoomBill extends Bill {
  RoomID: number;
  StartTime: Date;
  EndTime: Date;
  Hour: number;
}
interface MemberBill extends Bill {
  MemberTypeID: number;
}

interface Room {
  ID: number;
  RoomTypeID: number;
  Name: string;
  State: "available" | "unavailable";
}

interface RoomWithRoomType {
  ID: number;
  RoomTypeID: number;
  Name: string;
  State: "available" | "unavailable";
  RoomType: RoomType;
}

interface RoomType {
  ID: number;
  Name: string;
  Capacity: string;
  Price: number;
  Image: string;
}
interface User {
  ID?: number;
  FirstName: string;
  LastName: string;
  UserName: string;
  Email: string;
  Password: string;
  Tel: string;
}

interface Member {
  ID: number;
  UserID: number;
  MemberTypeID: number;
  Credit: number;
}

interface MemberWithMemberType {
  ID: number;
  UserID: number;
  MemberTypeID: number;
  Credit: number;
  MemberType: MemberType;
}

interface MemberType {
  ID: number;
  Name: string;
  MaxRoomHour: number;
  MaxBoardgame: number;
  Price: number;
}

interface LoginPayload {
  UserName: string;
  Password: string;
}

export type {
  Boardgame,
  GameBill,
  Bill,
  Room,
  RoomBill,
  RoomType,
  User,
  Member,
  MemberType,
  MemberBill,
  RoomWithRoomType,
  MemberWithMemberType,
  LoginPayload,
};
