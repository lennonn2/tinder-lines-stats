import React from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import './Messages.css';

const mapStateToProps = state => {
  return {
    messages: state.selected.messages
  }
}

const Messages = ({messages}) => {
  return (
    <div className='messagesContainer'>
      {
        messages.map((msg) => {
          return <Message key={msg.index} isReply={msg.isReply}>{msg.text}</Message>
        })
      }
    </div>
  )
}

export default connect(mapStateToProps)(Messages);