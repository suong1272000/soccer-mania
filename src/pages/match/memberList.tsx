import { GetServerSideProps } from "next";
import { parse } from "cookie";
import { userItem } from "@/data/user";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<any> => {
	const { req } = context;
	const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
	console.log(cookies.success);
	const userAuth = cookies.success == "true";
	if (!userAuth) {
		return {
			redirect: {
				destination: "/login",
			},
		};
	}
	return {
		props: {
			userItem,
		},
	};
};

const MemberList = ({ userItem }: any) => {
	const router = useRouter();
	const handleClick = (id: string) => {
		router.push(`/member/memberList/${id}`);
	};
	return (
		<div
			style={{ display: "flex", flexDirection: "column", width: "100%" }}
		>
			<h2>매치 리스트 페이지입니다.</h2>
			<Box
				sx={{
					width: "100%",
					maxWidth: "70%",
					bgcolor: "background.paper",
					display: "flex",
					justifyContent: "flex-start",
				}}
			>
				<Divider />
				<List>
					{userItem.map((user: any) => (
						<ListItem key={user.id} disablePadding>
							<ListItemButton
								onClick={() => handleClick(user.id)}
							>
								<ListItemText primary={`${user.name}`} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</div>
	);
};

export default MemberList;
