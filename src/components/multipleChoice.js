import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const MultipleChoice = props => {
  const [selectedAns, setSelectedAns] = useState([]);
  const onInputChange = (idx, isCecked) => {
    let ans = [...selectedAns];
    if (!isCecked) {
      ans = ans.filter(item => item !== idx);
    } else {
      ans.push(idx);
    }

    setSelectedAns(val);
    let finalVal = val.sort().join(',');
    props.onChangeInput(finalVal);
  };
  return (
    <div>
      {props.data.options.map((o, i) => (
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
              onChange={e => onInputChange(i + 1, e.target.checked)}
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
