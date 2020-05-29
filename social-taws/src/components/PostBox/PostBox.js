import React from 'react';

import './PostBox.css'

const  PostBox = () =>{
  return(
    <>
      <div className="container">
        <input type="text" placeholder="Type something"/>
        <button>Blogit</button>
      </div>
    </>
  )
  
}

export default PostBox;