import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'flex',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
}));


  
export default function FormDialog() {
  const classes = useStyles();  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [age, setAge] = React.useState('');

  const handleChangeDesplegable = (event) => {
    setAge(event.target.value);
  };


  return (
    <div>
      
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      <AddIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Turno</DialogTitle>
        <DialogContent>
          <DialogContentText>
            agregue el turno solicitado :
          </DialogContentText>
            <Grid container spacing={2} >
                
                <Grid item xs={6}>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Paciente"
                    type="Paciente"
                    fullWidth
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Obra Social</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChangeDesplegable}
                        >
                        <MenuItem value={10}>Ospe</MenuItem>
                        <MenuItem value={20}>Ioma</MenuItem>
                        <MenuItem value={30}>Osde</MenuItem>
                        <MenuItem value={40}>Pami</MenuItem>
                        <MenuItem value={50}>Iosfa</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Telefono"
                    type="Telefono"
                    fullWidth
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Orden"
                    type="Orden"
                    fullWidth
                    />
                </Grid> 
                <Grid item xs={5}>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="Fecha y hora"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Medico y Especialidad</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChangeDesplegable}
                        >
                        <MenuItem value={10}>Martin (Otorrino)</MenuItem>
                        <MenuItem value={20}>Fernanda (hematologia)</MenuItem>
                        <MenuItem value={30}>Francisco (Pediatra)</MenuItem>
                        <MenuItem value={40}>Graciela (urologia)</MenuItem>
                        <MenuItem value={50}>Pedro (Dermatologia)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>   
            </Grid> 
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Notification"
            />
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}