import React, {Component} from 'react';
import UserList from './UserList.jsx';

class UserSection extends Component{
  render(){
    return(
      <div className="support pannel panel-primary">
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body channels'>
          <UserList users={this.props.users} />
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default UserSection
