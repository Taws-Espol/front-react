import React,{useState} from 'react';
import {postService} from '../../services';

import './PostBox.css'

const  PostBox = (props) =>{
  const [postContent,setPostContent] = useState('');
  const [posting,setPosting] = useState(false);

  const handleSubmit = (event) =>{
    event.preventDefault();
    addPost();
  }

  const handleChange = (e) =>{
    const {value} = e.target;
    setPostContent(value);
  }

  function addPost(){
    setPosting(true);
    postService.addPost({content:postContent,user_id:props.user,liked:false})
      .then(
        res=>{
          setPosting(false);
          props.onSubmit({id:res,content:postContent,user_id:props.user,liked:false});
          setPostContent('');
        },
        error =>{
          setPosting(false);
          console.log(error);
        }
      )
  }

  return(
    <>
      <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea className="form-control" rows="3" placeholder="Type something here" onChange={handleChange} value={postContent}/>
          </div>
          <div className="text-right p-2">
            <button type="submit" className="btn btn-blue" disable={!postContent}>
              {posting && <span className="spinner-border spinner-border-sm mr-1"></span>}
              Blogit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PostBox;