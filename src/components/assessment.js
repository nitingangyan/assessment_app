import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MultipleChoice from './multipleChoice';
import MultipleSelect from './multipleSelect';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Assessment = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    text: 'test',
    options: ['A', 'B', 'C'],
    answer: 1,
    type: 'multiSelect'
  });
  const [index, setIndex] = useState(0);
  var questionIndexes = [];
  while (questionIndexes.length < questions.length) {
    var r = Math.floor(Math.random() * questions.length);
    if (questionIndexes.indexOf(r) === -1) questionIndexes.push(r);
  }
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  let content = null;

  if (currentQuestion.type == 'multiSelect') {
    content = <MultipleSelect />;
  } else {
    console.log('==');
    content = <MultipleChoice data={currentQuestion} />;
  }
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Assessment
          </Typography>
          <Typography className={classes.pos} color="textSecondary" />
          <Typography variant="body1" component="p">
            {currentQuestion.text}
          </Typography>
          <Typography variant="body2" component="p">
            {<MultipleChoice data={currentQuestion} />}

            {/* <FormGroup row>
              {currentQuestion.options.map((o, i) => (
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Primary"
                />
              ))}
            </FormGroup> */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Submit
          </Button>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Assessment;
