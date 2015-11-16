import './PostsContainer.scss';

import React from 'react';
import Post from './Post.react';

let postsData = [
  {
    postId: 1123432,
    authorId: 8943893,
    author: "Daffy Duck",
    thumbnail: "http://placehold.it/56x56",
    post: "Hehe, hunter can't catch me! But that doesn't stop him from trying ^^",
    location: "Narnia",
    timestamp: new Date(2015, 10, 15, 13, 32, 0),
    comments: [
      {
        commentId: 24314132432,
        authorId: 3992389,
        author: "Hunter",
        thumbnail: "http://placehold.it/40x40",
        comment: "You just wait you silly duck!",
        timestamp: new Date(2015, 10, 15, 13, 36, 0)
      },
      {
        commentId: 24314132232,
        authorId: 8943893,
        author: "Daffy Duck",
        thumbnail: "http://placehold.it/40x40",
        comment: "Aww, what's the matter, can't catch me? You'll get there.",
        timestamp: new Date(2015, 10, 15, 13, 38, 0)
      }
    ]
  },
  {
    postId: 1123422,
    authorId: 8945893,
    author: "Bugs Bunny",
    thumbnail: "http://placehold.it/56x56",
    post: "I'm gonna just stand here and munch on my carrot.",
    location: "Looney Toons",
    timestamp: new Date(2015, 10, 15, 9, 57, 0),
    comments: []
  },
  {
    postId: 11234122,
    authorId: 89458493,
    author: "Daffy Duck",
    thumbnail: "http://placehold.it/56x56",
    post: "Yeee buddy, you gotta catch me first. #comeandgetme",
    location: "Wardrobe",
    timestamp: new Date(2015, 10, 15, 8, 32, 0),
    comments: []
  },
  {
    postId: 112341122,
    authorId: 894518493,
    author: "Hunter",
    thumbnail: "http://placehold.it/56x56",
    post: "I'm gonna catch me some wabbit. #dinner",
    location: "Almost Narnia",
    timestamp: new Date(2015, 10, 14, 21, 39, 0),
    comments: []
  },
  {
    postId: 1111223432,
    authorId: 8943893,
    author: "Tweety Bird",
    thumbnail: "http://placehold.it/56x56",
    post: "Who else is awake? #yolo #sleepisfortheweak",
    location: "A cage",
    timestamp: new Date(2015, 10, 14, 17, 1, 0),
    comments: [
      {
        commentId: 2431141332432,
        authorId: 399221389,
        author: "Adolf Hitler",
        thumbnail: "http://placehold.it/40x40",
        comment: "Here I am.",
        timestamp: new Date(2015, 10, 14, 17, 10, 0)
      }
    ]
  },
  {
    postId: 11234166122,
    authorId: 8945158493,
    author: "Daffy Duck",
    thumbnail: "http://placehold.it/56x56",
    post: "Oh boy! Hunter's coming back to town.",
    location: "Unknown",
    timestamp: new Date(2015, 10, 14, 17, 0, 0),
    comments: []
  }
];

class PostsContainer extends React.Component {

  displayName = "PostsContainer";

  constructor(props) {
    super(props);
  }

  render() {
    let posts = postsData.map((post) => {
      return <Post key={post.postId} post={post} />
    });
    return (
      <section className="container" id="news">
        {posts}
        <div className="load-more">
          <a href="">Load more</a>
        </div>
      </section>
    );
  }

}

export default PostsContainer;