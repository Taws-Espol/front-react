import React from 'react';
import './PostList.css';
import Post from '../Post/Post';
const PostList = () => {
    return ( 
        <>
            <div className="bg-light shadow-sm rounded p-3 mb-4">
                <Post/>
                <Post/>
            </div>
        </>
    );
}

export default PostList;
