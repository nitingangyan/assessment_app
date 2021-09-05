import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    backgroundColor: theme.palette.background.paper
  }
}));

const DragAndDrop = props => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const allowDrop = e => {
    // let ev = e.target;
    e.preventDefault();
  };

  const drag = e => {
    let ev = e.target;
    e.dataTransfer.setData('text', ev.id);
  };

  const drop = e => {
    let ev = e.target;
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    console.log(data);
    ev.appendChild(document.getElementById(data));
    ev.style.pointerEvents = 'none';
  };
  let clsN = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    padding: '4px',
    border: '1px solid #aaaaaa',
    textAlign: 'center'
  };
  let clsNOpt = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    padding: '4px',
    border: '1px solid #aaaaaa',
    background: '#aaaaaa',
    marginLeft: '-5.5px',
    marginTop: '-5.5px',
    textAlign: 'center'
  };
  return (
    <div style={{ display: 'flex' }}>
      <List className={classes.root}>
        {props.data.dragOptions.map((item, i) => (
          <ListItem>
            <ListItemText secondary={item} />
            <div style={clsN}>
              <div
                id={'drag' + (i + 1)}
                style={clsNOpt}
                draggable="true"
                onDragStart={e => drag(e)}
              >
                {i + 1}
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <List className={classes.root}>
        {props.data.dropOptions.map((item, i) => (
          <ListItem>
            <div
              id={'drop' + (i + 1)}
              style={clsN}
              onDrop={e => drop(e)}
              onDragOver={e => allowDrop(e)}
            />
            <ListItemText secondary={item} />
          </ListItem>
        ))}
      </List>

      {/* <div
        id="div2"
        style={clsN}
        onDrop={e => drop(e)}
        onDragOver={e => allowDrop(e)}
      />

      <br /> */}
      {/* <img
        id="drag1"
        src="img_logo.gif"
        draggable="true"
        onDragStart={e => drag(e)}
        width="336"
        height="69"
      />
      <img
        id="drag2"
        src="img_logo.gif"
        draggable="true"
        onDragStart={e => drag(e)}
        width="336"
        height="69"
      /> */}
    </div>
  );
  // }

  // ...
};
// const DragAndDrop = () => {
//   setDND();

// };

export default DragAndDrop;
