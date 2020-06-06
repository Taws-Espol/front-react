import React,{useState,useEffect} from 'react'
import {userService,postService} from '../../services';
import './Profile.css';
import UserCard from '../../components/UserCard/UserCard';
import PostBox from '../../components/PostBox/PostBox';
import NavBar from '../../components/NavBar/NavBar';
import PostList from '../../components/PostList/PostList';

const Profile = () =>{
  const [posts,setPosts] = useState([]);
  const [postsNumber, setPostNumber] = useState(0);
  const [likesNumber, setLikesNumber] = useState(0);
  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null);
  const addNewPost = (postData)=>{
    setPosts([...posts,postData]);
  }


  useEffect(()=>{
    function fetchUserData(){
      const authUser = JSON.parse(localStorage.getItem('user'));
      userService.getById(authUser.id)
        .then(
          user =>{
            setLoading(false);
            setUser(user);
          },
          error =>{
            console.log(error);
          }
        );
      postService.postByUser(authUser.id)
        .then(
          res =>{
            setLoading(false);
            setPostNumber(res.length);
            setLikesNumber(res.filter((r) => r.liked).length);
          },
          error =>{
            console.log(error);
          }
        );
    }
    function fetchPostData(){
      postService.getAll()
        .then(
          posts =>{
            setLoading(false);
            setPosts(posts);
          },
          error =>{
            console.log(error);
          }
        );
    }
    fetchUserData();
    fetchPostData();
  },[])

  
  if(loading){
    return(
      <>
        <div className="text-center my-5">
          <div className="spinner-border"  style={{width:"3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }else{
    return(
      <>
        <NavBar/>
        <div className="container py-4">
            <div className="row">
              <div className="col-3">
                <aside>
                  { user && Boolean(postsNumber) && Boolean(likesNumber) && <UserCard user={user} postsNumber={postsNumber} likesNumber={likesNumber}/>}
                </aside>
              </div>
              <div className="col-9">
                {user && <PostBox onSubmit={addNewPost} user={user.id}/>}
                {Boolean(posts.length) && <PostList posts={posts}/>}
              </div>
            </div>
          </div>
        
      </>
    );
  }  
}

export default Profile;
