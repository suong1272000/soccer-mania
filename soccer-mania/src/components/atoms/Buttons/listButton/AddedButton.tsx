import { PlayerInfo, playerType } from "@/data/player";
import { Button, TextField } from "@mui/material"
import * as React from 'react';

const AddedButton = () => {
    const [newPlayer, setNewPlayer] = React.useState<Partial<playerType>>({});

    const handleClick = () => {
        if (newPlayer.jerseyNumber && newPlayer.name && newPlayer.age && newPlayer.birthday && newPlayer.position) {
            const newId = PlayerInfo.length + 1;
            const updatedPlayerInfo: playerType[] = [...PlayerInfo, { ...newPlayer, id: newId } as playerType];
            console.log(updatedPlayerInfo);
            // 이후 updatedPlayerInfo를 필요에 따라 저장하거나 다른 곳에 전달할 수 있습니다.
        } else {
            alert('모든 정보를 입력해주세요.')
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewPlayer((prevPlayer) => ({
            ...prevPlayer,
            [name]: value,
        }));
    };
  
    return (
        <>
        <TextField name="jerseyNumber" label="등번호" onChange={handleChange} value={newPlayer.jerseyNumber || ''} />
        <TextField name="name" label="이름" onChange={handleChange} value={newPlayer.name || ''} />
        <TextField name="age" label="나이" onChange={handleChange} value={newPlayer.age || ''} />
        <TextField name="birthday" label="생일" onChange={handleChange} value={newPlayer.birthday || ''} />
        <TextField name="position" label="포지션" onChange={handleChange} value={newPlayer.position || ''} />
        <Button variant="outlined" onClick={handleClick}>추가</Button>
        </>

    );
};
export default AddedButton;