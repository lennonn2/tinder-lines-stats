import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSelected } from '../actions';

const mapDispatch = (dispatch, ownProps) => {
  return {
    updateSelected: id => dispatch({type: 'UPDATE_SELECTED', id: ownProps.line.lineId})
  }
}

const Row = ({line, updateSelected}) => {
  // const onClick = () => updateSelected(line.lineId);
  return (
    <tr onClick={updateSelected}>
      <td>{line.lineId}</td>
      <td>{line.createdAt}</td>
      <td>{line.copies}</td>
      <td>{line.numViews}</td>
      <td>{line.categories.reduce((str, cat) => `${str}, ${cat}`, '')}</td>
    </tr>
  );
};

export default connect(null, mapDispatch)(Row);