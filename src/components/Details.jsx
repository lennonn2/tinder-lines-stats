import React from 'react';
import { connect } from 'react-redux';

import { resetSelected } from '../actions';
import Messages from './Messages';
import './Details.css';

const mapStateToProps = (state) => {
  return {
    selected: state.selected
  }
}

const Details = ({selected, resetSelected}) => {
  const {
    categories,
    createdAt,
    copies,
    lineId,
    messages,
    numViews
  } = selected;

  if (Object.keys(selected).length > 0) {
    return <div onClick={resetSelected} className='details'>
      <Messages />
      <div>{`ID: ${lineId}`}</div>
      <div>{`Created at: ${createdAt}`}</div>
    </div>
  } else {
    return null;
  }
}

export default connect(mapStateToProps, {resetSelected})(Details);