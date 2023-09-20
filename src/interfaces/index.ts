interface Boardgames {
  id: string;
  title: string;
  nop: string;
  age: string;
  playtime: number;
  genre: string;
  rentalPrice: number;
  qis: number;
  qio: number;
  deposit: number;
  src: string;
  tutorial: string;
}

interface GameBill {
  bid: string;
  bgid: string;
  startDate: Date;
  endDate: Date;
  returnStatus: string;
}

interface Bill {
  id: string;
  mid: string;
  status: string;
  total: number;
}

interface RoomBill {
  bid: string;
  roomID: string;
  startTime: Date;
  endTime: Date;
}

interface Room {
  id: string;
  typeId: string;
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
  uid: string;
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

interface MemberBill {
  bid: string;
  memberTypeID: string;
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
