import { userItem, userItemType } from "@/data/user";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<{ props: any }> => {
	const id = context.params?.id;
	const item = userItem.find((v) => v.id === id);
	return {
		props: { userItem: item },
	};
};

type UserProps = {
	userItem: userItemType;
};

const Users: FC<UserProps> = ({ userItem }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			이름: {userItem.name} 이메일:{userItem.email}
		</div>
	);
};
export default Users;
