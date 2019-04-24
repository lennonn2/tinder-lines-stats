import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Row.css';
import { updateSelected } from '../actions';
import {dateToString} from '../utils/date';

const mapDispatch = (dispatch, ownProps) => {
  return {
    updateSelected: id => dispatch({type: 'UPDATE_SELECTED', id: ownProps.line.lineId})
  }
}

const categories = cats => {
  const str = cats.reduce((str, cat) => `${cat}, ${str}`, '');
  return str.slice(0, str.length-2);
}

const Row = ({line, updateSelected}) => {
  return (
    <tr onClick={updateSelected}>
      <td className='idColumn'>{line.lineId}</td>
      <td className='dateColumn'>{dateToString(line.createdAt)}</td>
      <td className='copiesColumn'>{line.copies}</td>
      <td className='viewsColumn'>{line.numViews}</td>
      <td>{categories(line.categories)}</td>
    </tr>
  );
};

export default connect(null, mapDispatch)(Row);