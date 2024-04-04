import * as React from "react";
import Box from "@mui/material/Box";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
	return (
		<Box sx={{ display: "flex" }}>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
			></Box>
		</Box>
	);
}
