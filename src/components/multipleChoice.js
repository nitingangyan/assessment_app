import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const MultipleChoice = props => {
  return (
    <div>
      {props.data.options.map((o, i) => (
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
              onChange={e => props.onChangeInput(i + 1, e.target.checked)}
            />
          }
          label={o}
          key={i}
        />
      ))}
    </div>
  );
};

export default MultipleChoice;
