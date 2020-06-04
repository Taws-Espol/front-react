import React from 'react';
import './Post.css'


const liked = false;
const Post = () =>{
    return(
        <>
            <div className="container-fluid rounded mb-2 bg-white p-3">
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 post-header">
                                <span className="mr-2 text-3 font-weight-500 mb-1">Camilo Gutierrez</span>
                                <span className="mr-2 post-user">@cami2__</span>
                            </div>
                        </div>
                        <div className="row py-2 px-3">
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate quibusdam soluta iusto praesentium eaque sapiente esse veritatis facere ab cupiditate minima assumenda, rem laudantium rerum fugit vero. Tempore, rem!</p>
                        </div>
                    </div>
                    <div className="col-2 my-3">
                        <div className="text-center">
                            <button type="button" className="btn btn-blue btn-lg btn-block">{liked ? <i class="fas fa-thumbs-up"></i>:<i className="far fa-thumbs-up"></i>}</button>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    );
}

export default Post;