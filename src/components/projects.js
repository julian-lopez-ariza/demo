import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Tabla from './Tabla';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function BasicTable() {
  	return (
		<Grid container spacing={2} >
			<Grid item xs={7}>		
				<Breadcrumbs aria-label="breadcrumb">
					<Link color="inherit" href="/" onClick={handleClick}>
						Material-UI
					</Link>
					<Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
						Core
					</Link>
					<Typography color="textPrimary">Breadcrumb</Typography>
					
				</Breadcrumbs>
			</Grid>   
		
			<Grid item xs={12}>
				<Tabla/>
			</Grid>  
			
		</Grid>
	);
}