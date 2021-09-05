import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    backgroundColor: theme.palette.background.paper
  }
}));

const DragAndDrop = props => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState(
    new Array(props.data.dropOptions.length)
  );

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
    textAlign: 'center',
    fontWeight: 'bold'
  };
  return (
    <div style={{ display: 'flex' }}>
      <List className={classes.root}>
        {props.data.dragOptions.map((item, i) => (
          <ListItem>
            <ListItemText secondary={i + 1 + '. ' + item} />
            <div style={clsN}>
              <div
                id={'drag_' + (i + 1)}
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
              id={'drop_' + (i + 1)}
              style={clsN}
              onDrop={e => drop(e)}
              onDragOver={e => allowDrop(e)}
            />
            <ListItemText secondary={item} style={{ marginLeft: '10px' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DragAndDrop;
