import React,{Component} from 'react';
import './UserCard.css';
import avatar from './avatar.jpg';
class UserCard extends Component{
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return(
      <>
        <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
          <div className="profile-thumb mt-3 mb-4">
            <img className="rounded-circle" src={avatar} style={{height: '100px',width:'100px'}} alt=""/>
          </div>
          <p className="text-3 font-weight-500 mb-1">Camilo Gutierrez</p>
          <p>@cami2__</p>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p className="mb-1 text-3 font-weight-500 mb-1">Likes</p>
                <p>30</p>
              </div>
              <div className="col-6">
                <p className="mb-1 text-3 font-weight-500 mb-1">Posts</p>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserCard;