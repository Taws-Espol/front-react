import React from 'react';
import './PostList.css';
import Post from '../Post/Post';
const PostList = (props) => {
    return ( 
        <>
            <div className="bg-light shadow-sm rounded p-3 mb-4">
                {props.posts.map(post => <Post {...post}/>)}
            </div>
        </>
    );
}

export default PostList;
