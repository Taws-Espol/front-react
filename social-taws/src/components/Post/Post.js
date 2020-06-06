import React,{useState,useEffect} from 'react';
import {userService,postService} from '../../services'
import './Post.css'


const Post = (props) =>{
    const [liked,setLiked]=useState(false);
    const [userData,setUserData] = useState(null);
    const postData = props;

    useEffect(()=>{
      function getUserData(){
        const user_id = postData.user_id;
        userService.getById(user_id)
          .then(
            user =>{
              setUserData({firstName:user.firstName, lastName:user.lastName,username:user.username});
            },
            error=>{
              console.log(error);
            }
          );
      }
      getUserData();
      setLiked(postData.liked);
    },[])

      return(
        <>
          <div className="container-fluid rounded mb-2 bg-white p-3">
            <div className="row">
              <div className="col-10">
                <div className="row">
                  <div className="col-12 post-header">
                    <span className="mr-2 text-3 font-weight-500 mb-1">{userData.firstName+' '+userData.lastNam}</span>
                    <span className="mr-2 post-user">@cami2__</span>
                  </div>
                </div>
                <div className="row py-2 px-3">
                  <p className="mb-0">{postData.content}</p>
                </div>
              </div>
              <div className="col-2 my-3">
                <div className="tex-center">
                  <button type="button" className="btn btn-blue btn-lg btn-block">{liked ? <i className="fas fa-thumbs-up"></i>:<i className="far fa-thumbs-up"></i>}</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }


export default Post;