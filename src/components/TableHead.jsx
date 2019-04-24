import React from 'react';

import './TableHead.css';

const TableHead = () => {
  return (
    <div className='tableHead'>
      <div className='idColumnHead'>ID</div>
      <div className='dateColumnHead'>Created At</div>
      <div className='copiesColumnHead'>Copies</div>
      <div className='viewsColumnHead'>Views</div>
      <div>Categories</div>
    </div>
  )
}

export default TableHead;