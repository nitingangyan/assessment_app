import React, { useState, useEffect } from 'react';
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
  const [disableEle, setDisableEle] = useState({ disabled: true });
  const [feedback, setFeedback] = useState({
    message: 'Correct Answer!',
    type: 'success'
  });

  const [questions, setQuestions] = useState([
    {
      text: 'Question',
      options: ['A', 'B', 'C'],
      answer: '1',
      type: 'MMCQ'
    },
    {
      text: 'Question',
      options: ['A', 'B', 'C'],
      answer: '1',
      type: 'DropDown'
    },
    {
      text: 'Question',
      options: ['A', 'B', 'C'],
      answer: '1',
      type: 'DND'
    }
  ]);
  const [indexes, setIndexes] = useState(randomIndex(questions.length));
  console.log(indexes);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[indexes[index]]
  );
  const [submitedData, setSubmitedData] = useState({});
  const [selectedAns, setSelectedAns] = useState(null);
  const [open, setOpen] = React.useState(false);

  const onSubmit = () => {
    setDisableEle({ disabled: true });
    console.log(index);
    setSubmitedData({ ...submitedData, [indexes[index]]: selectedAns });
    if (selectedAns == setIndex.answer) {
      setFeedback({
        message: 'Correct Answer!',
        type: 'success'
      });
    } else {
      setFeedback({
        message: 'Incorrect Answer!',
        type: 'error'
      });
    }
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
      setIndex(index + 1);
    }
    setSelectedAns(null);
    setOpen(false);
  };

  const onChangeInput = val => {
    setSelectedAns(val);
    if (val) {
      setDisableEle({ disabled: false });
    } else {
      setDisableEle({ disabled: true });
    }
    console.log(val, selectedAns);
  };

  let content = null;
  if (currentQuestion.type == 'DropDown') {
    content = <MultipleSelect onChangeInput={onChangeInput} />;
  } else if (currentQuestion.type == 'DND') {
    content = <DragAndDrop onChangeInput={onChangeInput} />;
  } else {
    console.log('==');
    content = (
      <MultipleChoice data={currentQuestion} onChangeInput={onChangeInput} />
    );
  }
  useEffect(() => {
    setCurrentQuestion(questions[indexes[index]]);
  }, [index]);
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
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            {...disableEle}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={feedback.type}>
          {feedback.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Assessment;
