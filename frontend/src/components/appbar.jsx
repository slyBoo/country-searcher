import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';


export default function DrawerAppBar(props) {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav" sx={{color: 'black', background: 'linear-gradient(to bottom left, #03fc2c, #05f09d)', boxShadow: "none"}}>
				<Toolbar>
					<Button
						align="left"
						variant="h6"
						component={Link}
						to="/"
						sx={{ flexGrow: 1, display: { fontWeight: 'bold', xs: 'none', sm: 'block' } }}
					>
						Search
					</Button>
				</Toolbar>
			</AppBar>
			<Box component="main">
				<Toolbar />
			</Box>
		</Box>
	);
}
