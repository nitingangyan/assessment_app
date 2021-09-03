import React from 'react';
import $ from 'jquery';
function setDND() {
  $('.draggable').draggable({
    //cursor: 'move'
  });
  $('.droppable').droppable({
    drop: function(event, ui) {
      $(this).addClass('ui-state-highlight');
      ui.draggable.position({
        of: $(this),
        my: 'left top',
        at: 'left+6 top+6'
      });
      $('.draggable')
        .each(function(i) {
          $(this).data('value', i + 1);
        })
        .filter(':first')
        .trigger('listData');
    }
  });

  $('.draggable').on('listData', function() {
    $('.droppable').each(function() {
      console.log($(this).text() + ' - ' + $(this).data('value'));
    });
  });
}

class DragAndDrop extends React.Component {
  componentDidMount() {
    setDND();
  }
  render() {
    return (
      <div>
        <h3>Treatment Areas</h3>
        <div class="container">
          <div data-value="1" className="draggable">
            <p>Back</p>
          </div>
          <div data-value="1" className="droppable">
            <div class="droparea" />
            <p>Area 1</p>
          </div>
        </div>
        <div class="container">
          <div data-value="2" className="draggable">
            <p>Adomen</p>
          </div>
          <div data-value="2" className="droppable">
            <div class="droparea" />
            <p>Area 2</p>
          </div>
        </div>
        <div class="container">
          <div data-value="3" className="draggable">
            <p>Chest</p>
          </div>
          <div data-value="3" className="droppable">
            <div class="droparea" />
            <p>Area 3</p>
          </div>
        </div>
      </div>
    );
  }

  // ...
}
// const DragAndDrop = () => {
//   setDND();

// };

export default DragAndDrop;
