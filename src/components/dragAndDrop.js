import React from 'react';
// import $ from 'jquery';
// function setDND() {
//   $('.draggable').draggable({
//     //cursor: 'move'
//   });
//   $('.droppable').droppable({
//     drop: function(event, ui) {
//       $(this).addClass('ui-state-highlight');
//       ui.draggable.position({
//         of: $(this),
//         my: 'left top',
//         at: 'left+6 top+6'
//       });
//       $('.draggable')
//         .each(function(i) {
//           $(this).data('value', i + 1);
//         })
//         .filter(':first')
//         .trigger('listData');
//     }
//   });

//   $('.draggable').on('listData', function() {
//     $('.droppable').each(function() {
//       console.log($(this).text() + ' - ' + $(this).data('value'));
//     });
//   });
// }

const DragAndDrop = () => {
  // componentDidMount() {
  const allowDrop = e => {
    let ev = e.target;
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
  // }
  // render() {
  let clsN = {
    width: '350px',
    height: '70px',
    padding: '10px',
    border: '1px solid #aaaaaa'
  };
  return (
    <div>
      <div
        id="div1"
        style={clsN}
        onDrop={e => drop(e)}
        onDragOver={e => allowDrop(e)}
      />
      <div
        id="div2"
        style={clsN}
        onDrop={e => drop(e)}
        onDragOver={e => allowDrop(e)}
      />
      <br />
      <img
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
      />
    </div>
  );
  // }

  // ...
};
// const DragAndDrop = () => {
//   setDND();

// };

export default DragAndDrop;
