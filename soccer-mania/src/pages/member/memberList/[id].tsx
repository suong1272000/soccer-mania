import { PlayerInfo, playerType } from "@/data/player";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<{ props: any }> => {
	const id = context.params?.id;
	const item = PlayerInfo.find((v) => v.id === id);
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
			넘버: {PlayerInfo.jerseyNumber} 이름: {PlayerInfo.name} 나이:{PlayerInfo.age} 생일: {PlayerInfo.birthday} 포지션: {PlayerInfo.position}
		</div>
	);
};
export default Player;
