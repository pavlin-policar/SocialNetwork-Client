import './Post.scss';

import React from 'react';
import CommentsContainer from './CommentsContainer.react';
import CreateComment from './CreateComment.react';
import { timestampString } from '../../utils/TimestampUtils';

import InlineComponent from '../common/InlineComponent.react';
import StackComponent from '../common/StackComponent.react';

class Post extends React.Component {

  displayName = "Post";

  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
        <article className="padded post">
          <InlineComponent className="post-title">
            <img alt="" src={post.thumbnail}/>
            <StackComponent>
              <a href="">{post.author}</a>
              <span className="info">
                {timestampString(post.timestamp)} in <a href="">{post.location}</a>
              </span>
            </StackComponent>
          </InlineComponent>

          <section className="post-body">
            <span>{post.post}</span>
          </section>

          <CommentsContainer comments={post.comments}/>

          <CreateComment />
        </article>
    );
  }

}

export default Post;