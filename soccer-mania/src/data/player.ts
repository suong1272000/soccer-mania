export type playerType = {
    id:string;
    jerseyNumber: number;
    name:string;
    age:number;
    birthday: string;
    position: string;
    isCaptain?: boolean;
}
export const PlayerInfo:playerType[] = [
    {id: '01',jerseyNumber:1,name:"김승규", age:33,birthday:"1990-9-30",position:"GK"},
    {id: '02',jerseyNumber:21,name:"조현우", age:32,birthday:"1991-9-25",position:"GK"},
    {id: '03',jerseyNumber:19,name:"김영권", age:34,birthday:"1990-2-27",position:"DF"},
    {id: '04',jerseyNumber:3,name:"김진수", age:31,birthday:"1992-6-13",position:"DF"},
    {id: '05',jerseyNumber:4,name:"김민재", age:27,birthday:"1996-11-15",position:"DF"},
    {id: '06',jerseyNumber:22,name:"설영우", age:25,birthday:"1998-12-05",position:"DF"},
    {id: '07',jerseyNumber:7,name:"손흥민", age:31,birthday:"1992-7-08",position:"MF", isCaptain: true},
    {id: '08',jerseyNumber:10,name:"이재성", age:31,birthday:"1992-8-15",position:"MF"},
    {id: '09',jerseyNumber:6,name:"황인범", age:27,birthday:"1996-9-20",position:"MF"},
    {id: '10',jerseyNumber:18,name:"이강인", age:23,birthday:"2001-2-19",position:"MF"},
    {id: '11',jerseyNumber:17,name:"정우영", age:24,birthday:"1990-9-20",position:"MF"},
    {id: '12',jerseyNumber:9,name:"조규성", age:26,birthday:"1998-1-15",position:"FW"},
]