import React from 'react';

import './PostBox.css'

const  PostBox = () =>{
  return(
    <>
      <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
        <form>
          <div>
            <textarea className="form-control" id="post-textarea" rows="3" placeholder="Type something here"></textarea>
          </div>
          <div className="text-right p-2">
            <button type="button" className="btn btn-blue">Blogit</button>
          </div>
        </form>
      </div>
    </>
  )
  
}

export default PostBox;