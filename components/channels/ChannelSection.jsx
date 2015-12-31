import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component{
  render(){
    return(
      <div className="support panel panel-primary">
        <div className='panel-heading'>
          <strong>Channel</strong>
        </div>
        <div className='panel-body channels'>
          <ChannelList
            channels={this.props.channels}
            setChannel={this.props.setChannel}
            activeChannel={this.props.activeChannel}
          />
          <ChannelForm
            addChannel = {this.props.addChannel}
          />
        </div>
      </div>
    )
  }
}

ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired
}
export default ChannelSection
