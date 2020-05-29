import React,{Component} from 'react';
import './UserCard.css';

class UserCard extends Component{
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return(
      <>
        <div className="container">
          <p>My name is: {this.props.username}</p>
        </div>
      </>
    );
  }
}

export default UserCard;