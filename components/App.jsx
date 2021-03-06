import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      users: [{id:0, name: 'avi'},{id:1, name: 'jeff'}, {id:2, name:'ian'}, {id:3, name:'vinny'},{id:4, name:'deniz'}],
      activeChannel: {}
    }
  }
  addChannel(name){
    let {channels} = this.state
    channels.push({id: channels.length, name});
    this.setState({channels})
    // TODO: Send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }
  render(){
    return(
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            channels = {this.state.channels}
            activeChannel = {this.state.activeChannel}
            addChannel = {this.addChannel.bind(this)}
            setChannel = {this.setChannel.bind(this)}
          />
        <UserSection
          users = {this.state.users}
        />
        </div>
      </div>
    )
  }
}

export default App
