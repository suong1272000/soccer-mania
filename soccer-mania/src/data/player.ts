export type playerType = {
    id:number;
    jerseyNumber: string;
    name:string;
    age:string;
    birthday: string;
    position: string;
    email: string;
    phone: string;
    isCaptain?: boolean;
}
export const PlayerInfo:playerType[] = [
    {id: 1,jerseyNumber:'1',name:"김승규", age:'33',birthday:"1990-9-30",position:"GK",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 2,jerseyNumber:'21',name:"조현우", age:'32',birthday:"1991-9-25",position:"GK",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 3,jerseyNumber:'19',name:"김영권", age:'34',birthday:"1990-2-27",position:"DF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 4,jerseyNumber:'3',name:"김진수", age:'31',birthday:"1992-6-13",position:"DF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 5,jerseyNumber:'4',name:"김민재", age:'27',birthday:"1996-11-15",position:"DF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 6,jerseyNumber:'22',name:"설영우", age:'25',birthday:"1998-12-05",position:"DF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 7,jerseyNumber:'7',name:"손흥민", age:'31',birthday:"1992-7-08",position:"MF",email: "example@gmail.com", phone: "010-1234-5678", isCaptain: true},
    {id: 8,jerseyNumber:'10',name:"이재성", age:'31',birthday:"1992-8-15",position:"MF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 9,jerseyNumber:'6',name:"황인범", age:'27',birthday:"1996-9-20",position:"MF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 10,jerseyNumber:'18',name:"이강인", age:'23',birthday:"2001-2-19",position:"MF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 11,jerseyNumber:'17',name:"정우영", age:'24',birthday:"1990-9-20",position:"MF",email: "example@gmail.com", phone: "010-1234-5678"},
    {id: 12,jerseyNumber:'9',name:"조규성", age:'26',birthday:"1998-1-15",position:"FW",email: "example@gmail.com", phone: "010-1234-5678"},
]