import React, {Component} from 'react';

class Message extends Component{
  render(){
    const {message} = this.props;
    return(
      <li>
        {message.user} - {message.time}<br>
        {message.content}
      </li>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
}

export default MessageForm
