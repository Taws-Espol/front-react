import React,{useState} from 'react';

import './PostBox.css'

const  PostBox = (props) =>{
  const [postContent,setPostContent] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onSubmit({content:postContent});
    setPostContent('');
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setPostContent(value);
  }

  return(
    <>
      <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea className="form-control" id="post-textarea" onChange={handleChange} rows="3" value={postContent} placeholder="Type something here"></textarea>
          </div>
          <div className="text-right p-2">
            <button type="submit" className="btn btn-blue" disabled={!postContent}>Blogit</button>
          </div>
        </form>
      </div>
    </>
  )
  
}

export default PostBox;