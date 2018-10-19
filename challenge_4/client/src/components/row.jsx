import React from 'react';
import Cell from './cell.jsx';
const Row = (props) => {
  return (
    <tr>
      {props.row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={props.play} />)}
    </tr>
  );
};
export default Row;