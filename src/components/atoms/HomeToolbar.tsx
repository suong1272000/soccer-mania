import { Box } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const HomeToolbar = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: `calc(100% - ${drawerWidth}px)`,
					ml: `${drawerWidth}px`,
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Logo Name
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default HomeToolbar;
