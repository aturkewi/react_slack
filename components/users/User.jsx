import React, {Component} from 'react';

class User extends Component{
  render(){
    const {user} = this.props;
    return(
      <li>
        {user.name}
      </li>
    )
  }
}

User.propsTypes = {
  user: React.PropTypes.object.isRequired
}

export default User
