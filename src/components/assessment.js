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
import DragAndDrop from './dragAndDrop';

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

const randomIndex = num => {
  var indexes = [];
  while (indexes.length < num) {
    var r = Math.floor(Math.random() * num);
    if (indexes.indexOf(r) === -1) indexes.push(r);
  }
  return indexes;
};

const Assessment = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [questions, setQuestions] = useState([
    {
      text: 'Question',
      options: ['A', 'B', 'C'],
      answer: 1,
      type: 'MMCQ'
    },
    {
      text: 'Question',
      options: ['A', 'B', 'C'],
      answer: 1,
      type: 'DropDown'
    },
    {
      text: 'Question',
      options: ['A', 'B', 'C'],
      answer: 1,
      type: 'DND'
    }
  ]);
  const [indexes, setIndexes] = useState(randomIndex(questions.length));
  console.log(indexes);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[indexes[index]]
  );
  //
  const [open, setOpen] = React.useState(false);
  const onSubmit = () => {
    console.log(index);
    if (index == indexes.length) {
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (index == indexes.length - 1) {
    } else {
      setIndex(index + 1, setCurrentQuestion(questions[indexes[index]]));
    }

    setOpen(false);
  };

  let content = null;
  if (currentQuestion.type == 'DropDown') {
    content = <MultipleSelect questionNo={index + 1} />;
  } else if (currentQuestion.type == 'DND') {
    content = <DragAndDrop questionNo={index + 1} />;
  } else {
    console.log('==');
    content = <MultipleChoice data={currentQuestion} questionNo={index + 1} />;
  }
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Question ({index + 1} / {indexes.length})
          </Typography>
          <Typography className={classes.pos} color="textSecondary" />
          <Typography variant="body1" component="p">
            {currentQuestion.text}
          </Typography>
          <Typography variant="body2" component="p">
            {content}

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
          <Button variant="contained" color="primary" onClick={onSubmit}>
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
