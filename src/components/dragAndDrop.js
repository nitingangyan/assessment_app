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
  console.log('--------');
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
    let ans = [...selectedValue];
    let ev = e.target;
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    ev.appendChild(document.getElementById(data));
    ev.style.pointerEvents = 'none';
    ans[parseInt(ev.id.split('_')[1])] = data.split('_')[1];
    setSelectedValue(ans);
    props.onChangeInput(ans.join(','));
  };

  return (
    <div style={{ display: 'flex' }}>
      <List className={classes.root}>
        {props.data.dragOptions.map((item, i) => (
          <ListItem>
            <ListItemText secondary={i + 1 + '. ' + item} />
            <div className="drag-circle-parent">
              <div
                id={'drag_' + (i + 1)}
                className="drag-circle"
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
              id={'drop_' + i}
              className="drag-circle-parent"
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
