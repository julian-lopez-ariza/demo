import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  }, 
  roott: {
    width: '100%',
  },
  imag:{
    width:'100%'
  },
});
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function SimpleCard() {
  const classes = useStyles();
  
  
 
  return (
    <Grid container spacing={2} >
      
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="body2" component="p">
              <LinearProgressWithLabel value={15} />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
     

      <Grid item xs={4}>
      <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="body2" component="p">
              <LinearProgressWithLabel value={35} />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    

      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="body2" component="p">
              <LinearProgressWithLabel value={21} />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={8}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image="/assets/contemplative-reptile.jpg"
              title="Contemplative Reptile"
              className={classes.imag}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4}>
      <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2"color="textSecondary" gutterBottom>
             Word of the Day
            </Typography>
            <Typography variant="body2" component="p">
              <LinearProgressWithLabel value={75} />  
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid> 

  );
}