import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component{
  render(){
    return(
      <div>
        <ChannelList
          channels={this.props.channels}
          setChannel={this.props.setChannel}
        />
        <ChannelForm
          addChannel = {this.props.addChannel}
        />
      </div>
    )
  }
}

ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired
}
export default ChannelSection
