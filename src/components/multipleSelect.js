import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const MultipleSelect = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('A');

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  return (
    <FormGroup row>
      <FormControl className={classes.formControl}>
        {props.data.options.map((item, i) => (
          <div ksy={i}>
            <label>{item.text}</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValue}
              onChange={handleChange}
            >
              {item.options.map((opt, j) => (
                <MenuItem key={i + '_' + j} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
      </FormControl>
    </FormGroup>
  );
};

export default MultipleSelect;
