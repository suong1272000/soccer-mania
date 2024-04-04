import * as React from 'react';
import { Button, TextField } from "@mui/material";
import { PlayerInfo, playerType } from '@/data/player';

type AddedButtonProps = {
    onPlayerAdded: (updatedPlayerInfo: playerType[]) => void;
};

const AddedButton: React.FC<AddedButtonProps> = ({ onPlayerAdded }) => {
    const [newPlayer, setNewPlayer] = React.useState<Partial<playerType>>({});

    const handleClick = () => {
        if (newPlayer.jerseyNumber && newPlayer.name && newPlayer.age && newPlayer.birthday && newPlayer.position) {
            const lastId = PlayerInfo[PlayerInfo.length - 1].id;
            const newId = lastId + 1;
            const updatedPlayerInfo: playerType[] = [...PlayerInfo, { ...newPlayer, id: newId } as playerType];
            console.log(updatedPlayerInfo);
            onPlayerAdded(updatedPlayerInfo);
        } else {
            alert('모든 정보를 입력해주세요.');
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