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
  const [selectedValue, setSelectedValue] = useState(
    new Array(props.data.options.length)
  );

  const handleChange = (event, i) => {
    let vals = [...selectedValue];

    vals[i] = props.data.options[i].options.indexOf(event.target.value) + 1;
    setSelectedValue(vals);
    props.onChangeInput(vals.join(','));
    // setPersonName(event.target.value);
  };

  return (
    <FormGroup row>
      {props.data.options.map((item, i) => (
        <div ksy={i}>
          <FormControl className={classes.formControl}>
            <label style={{ marginRight: '10px' }}>
              {i + 1 + '. '}
              {item.text}
            </label>
            <Select onChange={e => handleChange(e, i)}>
              {item.options.map((opt, j) => (
                <MenuItem key={i + '_' + j} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      ))}
    </FormGroup>
  );
};

export default MultipleSelect;
