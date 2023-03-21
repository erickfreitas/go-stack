import React, {Component} from "react";

import Post from './Post';

class PostList extends Component{

    state = {
        posts: [
            {
              id: 1,
              author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              date: "04 Jun 2019",
              content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
              comments: [
                {
                  id: 1,
                  author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                  },
                  content: "Conteúdo do comentário"
                }
              ]
            },
            {
              id: 2,
              author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              date: "08 Jun 2019",
              content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
              comments: [
                {
                  id: 1,
                  author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                  },
                  content: "Conteúdo do comentário"
                }
              ]
            }
          ]
    }

    render() {
        return (
            <div className="post-list">
                {this.state.posts.map(post => (
                    <Post 
                      key={post.id} 
                      name={post.author.name}
                      content={post.content}
                      date={post.date}
                      comments={post.comments}
                    />
                ))}
            </div>
        )
    }
}

export default PostList;