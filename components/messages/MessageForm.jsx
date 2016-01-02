import React, {Component} from 'react';

class MessageForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.ref.message;
    const messageContent = node.value;
    this.props.addMessage(messageContent);
    node.value = "";
  }
  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder="Tell'em what you have to say"
            type="text"
            ref='message'
          />
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  addMessage: React.PorpTypes.func.isRequired
}

export default MessageForm
