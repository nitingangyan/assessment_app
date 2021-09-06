import React, { useEffect, useState } from 'react';
import db from '../firebaseDbConfig';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  onValue
} from 'firebase/database';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Leaderboard = () => {
  const classes = useStyles();
  let history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let username = localStorage.getItem('username');
    if (!username) {
      history.push('/login');
    }
    const mostViewedPosts = query(ref(db, 'assessment'), orderByChild('score'));
    let arr = [];

    onValue(
      mostViewedPosts,
      snapshot => {
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          arr.push(childData);
          // ...
        });
        setUsers(arr.reverse());
      },
      {
        onlyOnce: true
      }
    );
    console.log(mostViewedPosts);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
