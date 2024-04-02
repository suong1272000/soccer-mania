import { Box } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";

export type LayoutProps = {
	children: ReactNode;
};
const ContentBox: React.FC<LayoutProps> = ({ children }) => {
	const PageStyle = styled.div`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 584px;
	`;
	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					bgcolor: "background.default",
					p: 3,
					marginTop: "70px",
				}}
			>
				<PageStyle>{children}</PageStyle>
			</Box>
		</>
	);
};
export default ContentBox;
