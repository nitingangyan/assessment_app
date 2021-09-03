import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const MultipleChoice = props => {
  return (
    <FormGroup row>
      {props.data.options.map((o, i) => (
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label={o}
        />
      ))}
    </FormGroup>
  );
};

export default MultipleChoice;
