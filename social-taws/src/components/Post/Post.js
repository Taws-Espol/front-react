import React,{useState,useEffect} from 'react';
import {userService,postService} from '../../services'
import './Post.css'


const Post = (props) =>{
    const [liked,setLiked] = useState(false);
    const [userData, setUserData] = useState(null);
    const postData = props;

    const handleClick = () =>{
        let newPostData = {...postData,liked:!liked}
        postService.likePost(newPostData)
          .then(
            res =>{
              setLiked(!liked);
            },
            error =>{
              console.log(error);
            }
          );
    }

    useEffect(()=>{
      function getUserData(){
        const user_id = postData.user_id;
        userService.getById(user_id)
          .then(
            user =>{
              setUserData({firstName:user.firstName, lastName: user.lastName, username: user.username});
            },
            error =>{
              console.log(error)
            }
          );
      }
      getUserData();
      setLiked(postData.liked);
    },[postData])

    if(!userData){
      return null;
    }else{
      return(
        <>
            <div className="container-fluid rounded mb-2 bg-white p-3">
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 post-header">
                                <span className="mr-2 text-3 font-weight-500 mb-1">{userData.firstName+' '+userData.lastName}</span>
                                <span className="mr-2 post-user">{userData.username}</span>
                            </div>
                        </div>
                        <div className="row py-2 px-3">
                            <p className="mb-0">{postData.content}</p>
                        </div>
                    </div>
                    <div className="col-2 my-3">
                        <div className="text-center">
                            <button type="button" onClick={handleClick} className="btn btn-blue btn-lg btn-block">{liked ? <i className="fas fa-thumbs-up"></i>:<i className="far fa-thumbs-up"></i>}</button>
                        </div>
                    </div>
                </div>                
            </div>
        </>
      );
    }
}

export default Post;