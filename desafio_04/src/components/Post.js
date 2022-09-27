import React, { Component } from "react";

import Comment from "./Comment";

class Post extends Component {
    
    render(props) {
        return (
            <div className="post">
                <div className="post-header">
                    <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9RZLc68bXu2SIpu3hG7NE5Lz8gGlyqaQqQ&usqp=CAU"></img>
                    <div className="post-info">
                        <span className="profile-name">{props.name}</span>
                        <span className="post-date">04 Jun 2019</span>
                    </div>
                </div>
                <div className="post-body">
                    <span>Pesoal, a´g  sadslakçj j asçldkj  lsakdj</span>
                </div>

                <Comment />
            </div>
        );
    }

}

export default Post;