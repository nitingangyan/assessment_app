import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
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

    setSelectedAns(ans);
    let finalVal = ans.sort().join(',');
    props.onChangeInput(finalVal);
  };
  return (
    <div>
      {props.data.options.map((o, i) => (
        <div key={i}>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
                onChange={e => onInputChange(i + 1, e.target.checked)}
              />
            }
            label={o}
          />
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
