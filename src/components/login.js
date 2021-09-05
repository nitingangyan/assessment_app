import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const Login = props => {
  localStorage.setItem('username', '');
  props.setUsername('');
  const classes = useStyles();
  let history = useHistory();
  const [user, setUser] = useState('');
  const [errorMsg, setErrorMsg] = useState({
    error: false,
    helperText: ''
  });
  const onSubmit = () => {
    localStorage.setItem('username', user);
    if (user) {
      props.setUsername(user);
      history.push('/');
    }
  };
  const handleBlur = e => {
    let val = e.target.value;
    setUser(e.target.value);
    if (!val) {
      setErrorMsg({
        error: true,
        helperText: 'Username is required'
      });
    } else {
      setErrorMsg({
        error: false,
        helperText: ''
      });
    }
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
          <Typography className={classes.pos} color="textSecondary" />

          <Typography variant="body2" component="p">
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-error-helper-text"
                  label="Username"
                  defaultValue=""
                  onBlur={handleBlur}
                  {...errorMsg}
                />
              </div>
            </form>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
