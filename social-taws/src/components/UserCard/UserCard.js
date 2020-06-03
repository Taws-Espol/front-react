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
        <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
          <div className="profile-thumb mt-3 mb-4">
            <img className="rounded-circle" src="images/profile-thumb.jpg" alt=""/>
          </div>
          <p className="text-3 font-weight-500 mb-2">Camilo Gutierrez</p>
          <a>@cami3__</a>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p>Friends</p>
                <p>30</p>
              </div>
              <div className="col-6">
                <p>Posts</p>
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