import React, { Component } from 'react';
import { connect } from 'react-redux';

import Row from './Row';
import './Table.css';

const mapState = ({lines}) => {
  return {
    lines
  };
}

const Table = ({ lines }) => {
  return (
    <div className='mytable'>
      <table className='table' style={{marginBottom: 0}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Created At</th>
            <th>Copies</th>
            <th>Views</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {lines.map(line =>
            <Row key={line.lineId} line={line}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapState)(Table);