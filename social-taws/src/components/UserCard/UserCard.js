import React,{Component} from 'react';
import './UserCard.css';
import avatar from './avatar.jpg';
class UserCard extends Component{
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    const user = this.props.user;
    return(
      <>
        <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
          <div className="profile-thumb mt-3 mb-4">
            <img className="rounded-circle" src={avatar} style={{height:'100px',width:'100px'}} alt="una carita generica"/>
          </div>
        <p className="text-3 font-weight-500 mb-1">{user.firstName+' '+user.lastName}</p>
        <p>{user.username}</p>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="mb-1 text-3 font-weight-500 mb-1">Likes</p>
              <p>{this.props.likesNumber}</p>
            </div>
            <div className="col-6">
            <p className="mb-1 text-3 font-weight-500 mb-1">Posts</p>
              <p>{this.props.postsNumber}</p>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default UserCard;