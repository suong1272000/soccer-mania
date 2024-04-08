import { PlayerInfo, playerType } from "@/data/player";
import { Avatar, Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<{ props: any }> => {
	const id = context.params?.id;
	const parsedId = typeof id === 'string' ? parseInt(id, 10) : null;
	const item = PlayerInfo.find((v) => v.id === parsedId);
	return {
		props: { PlayerInfo: item },
	};
};

type PlayerProps = {
	PlayerInfo: playerType;
};

const Player: FC<PlayerProps> = ({ PlayerInfo }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			<Box sx={{ width: '70%', display: 'flex', alignItems: 'center'}}>
			<Avatar
				alt="Remy Sharp"
				src="/profileBG.jpg"
				sx={{ width: 150, height: 150,}}
				/>
			<Box sx={{ width: '100%', marginLeft: "50px"}}>
				<h2>{PlayerInfo.name}</h2>
				<h4>{PlayerInfo.birthday} / {PlayerInfo.age}세</h4>
			</Box>
		</Box>
		<Box sx={{ width: '70%', padding: '12px 14px', marginTop: "20px" ,display: 'flex', flexDirection: 'column'}}>
			<p>등번호: {PlayerInfo.jerseyNumber}</p>
			<p>포지션: {PlayerInfo.position}</p>
			<p>이메일: {PlayerInfo.email}</p>
			<p>전화번호: {PlayerInfo.phone}</p>
		</Box>
		</div>

		
	);
};
export default Player;
