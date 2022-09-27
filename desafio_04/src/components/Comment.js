import React, { Component } from "react";

class Comment extends Component {
    render() {
        return (
            <div className="comment">                
                <div className="comment-body">
                    <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9RZLc68bXu2SIpu3hG7NE5Lz8gGlyqaQqQ&usqp=CAU"></img>
                    <div className="comment-content">
                        <span className="comment-name">Júlio Alcantara</span>
                        <span>Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim</span>
                    </div>
                </div>
               </div>
        );
    }
}

export default Comment;