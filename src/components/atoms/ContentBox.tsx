import { Box } from "@mui/material";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};
const ContentBox: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					bgcolor: "background.default",
					p: 3,
					margin: " 70px 260px",
					width: "100%",
				}}
			>
				{children}
			</Box>
		</>
	);
};
export default ContentBox;
