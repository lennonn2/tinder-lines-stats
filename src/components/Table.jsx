import React, { Component } from 'react';
import { connect } from 'react-redux';

import Row from './Row';
import TableHead from './TableHead';
import './Table.css';

const mapState = ({lines}) => {
  return {
    lines
  };
}

const Table = ({ lines }) => {
  return (
    <div className='mytable'>
      <table className='table scroll' style={{marginBottom: 0}}>
        <TableHead />
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