import React from 'react'
import './Profile.css';
import UserCard from '../../components/UserCard/UserCard';
import PostBox from '../../components/PostBox/PostBox';

const Profile = () =>{
  return(
    <>
      <h1>I'm Profile</h1>
      <UserCard username='Raul'/>
      <PostBox/>
    </>
  )
}

export default Profile;
