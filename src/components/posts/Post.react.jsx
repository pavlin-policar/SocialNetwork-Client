import React from 'react';
import CommentsContainer from './CommentsContainer.react';
import CreateComment from './CreateComment.react';
import { timestampString } from '../../utils/TimestampUtils';

class Post extends React.Component {

  displayName = "Post";

  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
      <article className="post">
        <section className="post-title inline-component">
          <img alt="" src={post.thumbnail}/>
          <div>
            <a className="author" href="">{post.author}</a>
            <span className="info">
              {timestampString(post.timestamp)}&nbsp;<a href="">{post.location}</a>
            </span>
          </div>
        </section>

        <section className="post-body">
          <span className="post-content">{post.post}</span>
        </section>

        <CommentsContainer comments={post.comments}/>

        <CreateComment />
      </article>
    );
  }

}

export default Post;