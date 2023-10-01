interface Boardgame {
  id?: number;
  title: string;
  numberOfPlayers: string;
  minAge: number;
  playTime: number;
  genre: string;
  rentalPrice: number;
  quantityInStock: number;
  quantityInRental: number;
  deposit: number;
  src: string;
  tutorial: string;
}

interface Bill {
  id: number;
  memberId: number;
  status: "paid" | "pending";
  total: number;
  slip: string;
  payAt: Date;
}

interface GameBill extends Bill {
  boardgameId: number;
  startDate: Date;
  endDate: Date;
  returnStatus: "renting" | "returned";
}
interface RoomBill extends Bill {
  roomId: number;
  startTime: Date;
  endTime: Date;
  hour: number;
}
interface MemberBill extends Bill {
  memberTypeId: number;
}

interface Room {
  id: number;
  roomTypeId: number;
  name: string;
  state: "available" | "unavailable";
}
interface RoomType {
  id: number;
  name: string;
  capacity: number;
  price: number;
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  tel: string;
}

interface Member {
  id: number;
  userId: number;
  memberTypeId: number;
  credit: number;
}

interface MemberType {
  id: number;
  name: string;
  maxRoomHours: number;
  maxBoardgames: string;
  price: string;
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
};
