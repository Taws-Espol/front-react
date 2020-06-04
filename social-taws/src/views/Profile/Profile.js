import React from 'react'
import './Profile.css';
import UserCard from '../../components/UserCard/UserCard';
import PostBox from '../../components/PostBox/PostBox';
import NavBar from '../../components/NavBar/NavBar';
import PostList from '../../components/PostList/PostList';

const Profile = () =>{
  return(
    <>
      <NavBar/>
      <div className="container py-4">
        <div className="row">
          <div className="col-3">
            <aside>
              <UserCard username='Raul'/>
            </aside>
          </div>
          <div className="col-9">
            <PostBox/>
            <PostList/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
