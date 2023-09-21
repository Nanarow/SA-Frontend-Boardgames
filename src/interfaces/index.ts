interface Boardgames {
  id: string;
  title: string;
  numberOfPlayers: string;
  minAge: string;
  playTime: number;
  genre: string;
  rentalPrice: number;
  quantityInStock: number;
  quantityOnOrders: number;
  deposit: number;
  src: string;
  tutorial: string;
}

interface Bill {
  id: string;
  memberId: string;
  status: string;
  total: number;
}
interface GameBill extends Bill {
  boardgameId: string;
  startDate: Date;
  endDate: Date;
  returnStatus: string;
}
interface RoomBill extends Bill {
  roomId: string;
  startTime: Date;
  endTime: Date;
}
interface MemberBill extends Bill {
  memberTypeId: string;
}

interface Room {
  id: string;
  roomTypeId: string;
  name: string;
  state: string;
}
interface RoomType {
  id: string;
  capacity: number;
  price: number;
}
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tel: string;
  idCard: string;
}

interface Member {
  id: string;
  userId: string;
  memberTypeID: string;
  point: number;
}

interface MemberType {
  id: string;
  name: string;
  maxRoom: string;
  maxBoardgames: string;
  price: string;
}

export type {
  Boardgames,
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
