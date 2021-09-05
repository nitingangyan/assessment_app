import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  let history = useHistory();
  const classes = useStyles();
  const [disableEle, setDisableEle] = useState({ disabled: true });
  const [disableQuestion, setDisableQuestion] = useState('');
  const [feedback, setFeedback] = useState({
    message: 'Correct Answer!',
    type: 'success'
  });

  const [questions, setQuestions] = useState([
    {
      text: 'Multi Choice Question',
      options: ['A', 'B', 'C'],
      answer: '1,3',
      type: 'MMCQ'
    },
    {
      text: 'Multi Select Question',
      options: [
        { text: 'A', options: ['A', 'B', 'C'] },
        { text: 'B', options: ['A', 'B', 'C'] },
        { text: 'C', options: ['A', 'B', 'C'] }
      ],
      answer: '1,2,3',
      type: 'DropDown'
    },
    {
      text: 'Drag and Drop Question',
      dragOptions: ['A', 'B', 'C'],
      dropOptions: ['A', 'B', 'C'],
      answer: '1,2,3',
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
    setDisableQuestion('disable-element');
    console.log(index);
    setSubmitedData({ ...submitedData, [indexes[index]]: selectedAns });
    if (selectedAns == currentQuestion.answer) {
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
    setDisableQuestion('');
    if (index == indexes.length - 1) {
      history.push('/leaderboard');
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
    content = (
      <MultipleSelect data={currentQuestion} onChangeInput={onChangeInput} />
    );
  } else if (currentQuestion.type == 'DND') {
    content = (
      <DragAndDrop data={currentQuestion} onChangeInput={onChangeInput} />
    );
  } else {
    console.log('==');
    content = (
      <MultipleChoice data={currentQuestion} onChangeInput={onChangeInput} />
    );
  }
  useEffect(() => {
    let username = localStorage.getItem('username');
    if (!username) {
      history.push('/login');
    }
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
            <div className={disableQuestion}>{content}</div>
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
